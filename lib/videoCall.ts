'use client';

import { wsManager } from './websocket';

export interface CallParticipant {
  id: string;
  name: string;
  avatar?: string;
  isAudioMuted: boolean;
  isVideoMuted: boolean;
  stream?: MediaStream;
}

export interface CallState {
  callId: string;
  isActive: boolean;
  participants: CallParticipant[];
  localStream?: MediaStream;
  isScreenSharing: boolean;
  isRecording: boolean;
}

class VideoCallManager {
  private peerConnections: Map<string, RTCPeerConnection> = new Map();
  private localStream: MediaStream | null = null;
  private callState: CallState | null = null;
  private listeners: ((state: CallState | null) => void)[] = [];

  constructor() {
    this.setupWebSocketListeners();
  }

  private setupWebSocketListeners() {
    wsManager.subscribe('call_initiated', this.handleCallInitiated.bind(this));
    wsManager.subscribe('call_joined', this.handleCallJoined.bind(this));
    wsManager.subscribe('webrtc_signal', this.handleWebRTCSignal.bind(this));
    wsManager.subscribe('participant_left', this.handleParticipantLeft.bind(this));
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.callState));
  }

  subscribe(listener: (state: CallState | null) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  async startCall(participants: string[]): Promise<string> {
    try {
      const callId = `call_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      await this.initializeLocalMedia();
      
      this.callState = {
        callId,
        isActive: true,
        participants: [],
        localStream: this.localStream || undefined,
        isScreenSharing: false,
        isRecording: false
      };

      wsManager.initiateCall(callId, participants);
      this.notifyListeners();
      
      return callId;
    } catch (error) {
      console.error('Failed to start call:', error);
      throw error;
    }
  }

  async joinCall(callId: string): Promise<void> {
    try {
      await this.initializeLocalMedia();
      
      this.callState = {
        callId,
        isActive: true,
        participants: [],
        localStream: this.localStream || undefined,
        isScreenSharing: false,
        isRecording: false
      };

      wsManager.joinCall(callId);
      this.notifyListeners();
    } catch (error) {
      console.error('Failed to join call:', error);
      throw error;
    }
  }

  private async initializeLocalMedia() {
    try {
      this.localStream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720, frameRate: 30 },
        audio: { echoCancellation: true, noiseSuppression: true }
      });
    } catch (error) {
      console.error('Failed to access media devices:', error);
      throw error;
    }
  }

  private createPeerConnection(userId: string): RTCPeerConnection {
    const configuration = {
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' }
      ]
    };

    const peerConnection = new RTCPeerConnection(configuration);

    peerConnection.onicecandidate = (event) => {
      if (event.candidate && this.callState) {
        wsManager.sendSignal(this.callState.callId, {
          type: 'ice-candidate',
          candidate: event.candidate
        }, userId);
      }
    };

    peerConnection.ontrack = (event) => {
      this.handleRemoteStream(userId, event.streams[0]);
    };

    if (this.localStream) {
      this.localStream.getTracks().forEach(track => {
        peerConnection.addTrack(track, this.localStream!);
      });
    }

    this.peerConnections.set(userId, peerConnection);
    return peerConnection;
  }

  private handleRemoteStream(userId: string, stream: MediaStream) {
    if (this.callState) {
      const participantIndex = this.callState.participants.findIndex(p => p.id === userId);
      if (participantIndex >= 0) {
        this.callState.participants[participantIndex].stream = stream;
      } else {
        this.callState.participants.push({
          id: userId,
          name: `User ${userId}`,
          isAudioMuted: false,
          isVideoMuted: false,
          stream
        });
      }
      this.notifyListeners();
    }
  }

  private async handleCallInitiated(data: any) {
    // Handle incoming call invitation
    console.log('Call initiated:', data);
  }

  private async handleCallJoined(data: any) {
    if (!this.callState) return;

    const { userId } = data;
    const peerConnection = this.createPeerConnection(userId);
    
    try {
      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);
      
      wsManager.sendSignal(this.callState.callId, {
        type: 'offer',
        offer
      }, userId);
    } catch (error) {
      console.error('Failed to create offer:', error);
    }
  }

  private async handleWebRTCSignal(data: any) {
    if (!this.callState) return;

    const { signal, fromUserId } = data;
    let peerConnection = this.peerConnections.get(fromUserId);

    if (!peerConnection) {
      peerConnection = this.createPeerConnection(fromUserId);
    }

    try {
      switch (signal.type) {
        case 'offer':
          await peerConnection.setRemoteDescription(signal.offer);
          const answer = await peerConnection.createAnswer();
          await peerConnection.setLocalDescription(answer);
          wsManager.sendSignal(this.callState.callId, {
            type: 'answer',
            answer
          }, fromUserId);
          break;

        case 'answer':
          await peerConnection.setRemoteDescription(signal.answer);
          break;

        case 'ice-candidate':
          await peerConnection.addIceCandidate(signal.candidate);
          break;
      }
    } catch (error) {
      console.error('WebRTC signaling error:', error);
    }
  }

  private handleParticipantLeft(data: any) {
    if (!this.callState) return;

    const { userId } = data;
    const peerConnection = this.peerConnections.get(userId);
    
    if (peerConnection) {
      peerConnection.close();
      this.peerConnections.delete(userId);
    }

    this.callState.participants = this.callState.participants.filter(p => p.id !== userId);
    this.notifyListeners();
  }

  async toggleAudio(): Promise<void> {
    if (this.localStream) {
      const audioTrack = this.localStream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        this.notifyListeners();
      }
    }
  }

  async toggleVideo(): Promise<void> {
    if (this.localStream) {
      const videoTrack = this.localStream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        this.notifyListeners();
      }
    }
  }

  async startScreenShare(): Promise<void> {
    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true
      });

      if (this.callState) {
        this.callState.isScreenSharing = true;
        
        const videoTrack = screenStream.getVideoTracks()[0];
        this.peerConnections.forEach(async (peerConnection) => {
          const sender = peerConnection.getSenders().find(s => 
            s.track && s.track.kind === 'video'
          );
          if (sender) {
            await sender.replaceTrack(videoTrack);
          }
        });

        videoTrack.onended = () => {
          this.stopScreenShare();
        };
      }

      this.notifyListeners();
    } catch (error) {
      console.error('Failed to start screen sharing:', error);
    }
  }

  async stopScreenShare(): Promise<void> {
    if (this.callState && this.localStream) {
      this.callState.isScreenSharing = false;
      
      const videoTrack = this.localStream.getVideoTracks()[0];
      this.peerConnections.forEach(async (peerConnection) => {
        const sender = peerConnection.getSenders().find(s => 
          s.track && s.track.kind === 'video'
        );
        if (sender && videoTrack) {
          await sender.replaceTrack(videoTrack);
        }
      });

      this.notifyListeners();
    }
  }

  endCall(): void {
    if (this.callState) {
      this.peerConnections.forEach(peerConnection => {
        peerConnection.close();
      });
      this.peerConnections.clear();

      if (this.localStream) {
        this.localStream.getTracks().forEach(track => track.stop());
        this.localStream = null;
      }

      this.callState = null;
      this.notifyListeners();
    }
  }

  getCallState(): CallState | null {
    return this.callState;
  }
}

export const videoCallManager = new VideoCallManager();