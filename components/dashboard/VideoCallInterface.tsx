'use client';

import { useState, useEffect, useRef } from 'react';
import { videoCallManager, CallState, CallParticipant } from '../../lib/videoCall';

export default function VideoCallInterface() {
  const [callState, setCallState] = useState<CallState | null>(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideosRef = useRef<{ [userId: string]: HTMLVideoElement }>({});

  useEffect(() => {
    const unsubscribe = videoCallManager.subscribe((state) => {
      setCallState(state);
      
      if (state && state.localStream && localVideoRef.current) {
        localVideoRef.current.srcObject = state.localStream;
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (callState) {
      callState.participants.forEach(participant => {
        if (participant.stream && remoteVideosRef.current[participant.id]) {
          remoteVideosRef.current[participant.id].srcObject = participant.stream;
        }
      });
    }
  }, [callState?.participants]);

  const handleEndCall = () => {
    videoCallManager.endCall();
  };

  const handleToggleAudio = () => {
    videoCallManager.toggleAudio();
  };

  const handleToggleVideo = () => {
    videoCallManager.toggleVideo();
  };

  const handleScreenShare = () => {
    if (callState?.isScreenSharing) {
      videoCallManager.stopScreenShare();
    } else {
      videoCallManager.startScreenShare();
    }
  };

  if (!callState?.isActive) {
    return null;
  }

  const localStream = callState.localStream;
  const isAudioMuted = localStream ? !localStream.getAudioTracks()[0]?.enabled : true;
  const isVideoMuted = localStream ? !localStream.getVideoTracks()[0]?.enabled : true;

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-4 shadow-2xl z-50">
        <div className="flex items-center space-x-4">
          <div className="flex -space-x-2">
            {callState.participants.slice(0, 3).map((participant, index) => (
              <div key={participant.id} className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full border-2 border-slate-800 flex items-center justify-center">
                <span className="text-white text-sm font-bold">
                  {participant.name.charAt(0)}
                </span>
              </div>
            ))}
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full border-2 border-slate-800 flex items-center justify-center">
              <span className="text-white text-sm font-bold">You</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={handleToggleAudio}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                isAudioMuted ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              <i className={isAudioMuted ? 'ri-mic-off-line' : 'ri-mic-line'}></i>
            </button>
            
            <button
              onClick={() => setIsMinimized(false)}
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <i className="ri-fullscreen-line text-white"></i>
            </button>
            
            <button
              onClick={handleEndCall}
              className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <i className="ri-phone-line text-white"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Call Active</span>
            </div>
            <span className="text-gray-300">
              {callState.participants.length + 1} participants
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(true)}
              className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <i className="ri-subtract-line text-white"></i>
            </button>
            <button
              onClick={handleEndCall}
              className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-white"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <div className="flex-1 p-6">
        <div className={`grid gap-4 h-full ${
          callState.participants.length === 0 ? 'grid-cols-1' :
          callState.participants.length === 1 ? 'grid-cols-2' :
          callState.participants.length <= 3 ? 'grid-cols-2 grid-rows-2' :
          'grid-cols-3 grid-rows-2'
        }`}>
          {/* Local Video */}
          <div className="relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
            <video
              ref={localVideoRef}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-xl px-3 py-2">
              <span className="text-white font-medium">You</span>
            </div>
            {isVideoMuted && (
              <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                  <i className="ri-user-line text-white text-3xl"></i>
                </div>
              </div>
            )}
          </div>

          {/* Remote Videos */}
          {callState.participants.map((participant) => (
            <div key={participant.id} className="relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
              <video
                ref={(el) => {
                  if (el) remoteVideosRef.current[participant.id] = el;
                }}
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-xl px-3 py-2">
                <span className="text-white font-medium">{participant.name}</span>
              </div>
              {participant.isVideoMuted && (
                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {participant.name.charAt(0)}
                    </span>
                  </div>
                </div>
              )}
              <div className="absolute top-4 right-4 flex space-x-2">
                {participant.isAudioMuted && (
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <i className="ri-mic-off-line text-white text-sm"></i>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 border-t border-slate-700 p-6">
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={handleToggleAudio}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isAudioMuted
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-slate-700 hover:bg-slate-600'
            }`}
          >
            <i className={`${isAudioMuted ? 'ri-mic-off-line' : 'ri-mic-line'} text-white text-xl`}></i>
          </button>

          <button
            onClick={handleToggleVideo}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isVideoMuted
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-slate-700 hover:bg-slate-600'
            }`}
          >
            <i className={`${isVideoMuted ? 'ri-vidicon-off-line' : 'ri-vidicon-line'} text-white text-xl`}></i>
          </button>

          <button
            onClick={handleScreenShare}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              callState.isScreenSharing
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-slate-700 hover:bg-slate-600'
            }`}
          >
            <i className="ri-screen-share-line text-white text-xl"></i>
          </button>

          <button
            onClick={handleEndCall}
            className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all cursor-pointer"
          >
            <i className="ri-phone-line text-white text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
}