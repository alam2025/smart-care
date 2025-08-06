/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Headphones, Loader2, PhoneOff } from "lucide-react";
import {
  DisconnectButton,
  RoomAudioRenderer,
  RoomContext,
  useVoiceAssistant,
} from "@livekit/components-react";
import { Room, RoomEvent } from "livekit-client";

export type ConnectionDetails = {
  serverUrl: string;
  roomName: string;
  participantName: string;
  participantToken: string;
};

export default function AiAssistantButton() {
  const [room] = useState(new Room());

  useEffect(() => {
    room.on(RoomEvent.MediaDevicesError, onDeviceFailure);
    return () => {
      room.off(RoomEvent.MediaDevicesError, onDeviceFailure);
    };
  }, [room]);

  const onConnectButtonClicked = useCallback(async () => {
    const companyId: any = "680f869e974b38f8047fd9bd";
    const url = new URL(
      process.env.NEXT_PUBLIC_CONN_DETAILS_ENDPOINT ?? "/api/connection-details",
      window.location.origin
    );
    url.searchParams.set("companyId", companyId);
    const response = await fetch(url.toString());
    const connectionDetailsData: ConnectionDetails = await response.json();
    await room.connect(connectionDetailsData.serverUrl, connectionDetailsData.participantToken);
    await room.localParticipant.setMicrophoneEnabled(true);
  }, [room]);

  return (
    <RoomContext.Provider value={room}>
      <VoiceButton onConnect={onConnectButtonClicked} />
      <RoomAudioRenderer />
    </RoomContext.Provider>
  );
}

function VoiceButton({ onConnect }: { onConnect: () => void }) {
  const { state: agentState } = useVoiceAssistant();

  const isLoading = agentState === "connecting";
  const isSpeaking = agentState === "speaking";
  const isListening = agentState === "listening";
  const isThinking = agentState === "thinking";
  const isDisconnected = agentState === "disconnected";
  const isConnected = isSpeaking || isListening || isThinking;

  const handleClick = () => {
    if (isDisconnected) onConnect();
  };

  const ButtonContent = () => (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      className={`cursor-pointer flex items-center gap-3 px-4 py-2 min-w-[220px] rounded-xl transition-all
        ${isDisconnected
          ? "shadow-[0_0_16px_rgba(59,130,246,0.6)]"
          : isSpeaking
          ? "shadow-[0_0_100px_20px_rgba(255,0,0,1)] animate-pulse"
          : "shadow-[0_0_20px_rgba(239,68,68,0.7)]"}
        bg-white dark:bg-neutral-900`}
    >
      <div className={`w-8 h-8 flex items-center justify-center  text-white rounded-md relative ${isConnected? 'bg-red-500' : 'bg-[#2D9A9D]'} `}>
        <Headphones
          className={`w-4 h-4 absolute transition-opacity duration-300 ${
            isLoading || isConnected ? "opacity-0" : "opacity-100"
          }`}
        />
        <Loader2
          className={`w-4 h-4 absolute animate-spin transition-opacity duration-300 ${
            isLoading ? "opacity-100" : "opacity-0"
          }`}
        />
        {isConnected && (
          <span className="text-xs absolute"><PhoneOff /></span>
        )}
      </div>
      <div className="text-left whitespace-nowrap">
        <p className="text-sm font-semibold text-black dark:text-white">
          {isConnected ? "Connected" : "Need help?"}
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          {isLoading
            ? "Connecting..."
            : isConnected
            ? "Click to end conversation"
            : "Ask our AI assistant"}
        </p>
      </div>
    </motion.button>
  );

  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      className=" right-6 z-50"
    >
      {isConnected ? (
        <DisconnectButton >
          <ButtonContent />
        </DisconnectButton>
      ) : (
        <ButtonContent />
      )}
    </motion.div>
  );
}

function onDeviceFailure(error: Error) {
  console.error(error);
  alert("Microphone/camera permission failed. Please allow access and reload.");
}
