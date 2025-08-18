"use client";

import { Room, createLocalTracks, Track } from "livekit-client";
import { useState } from "react";

export default function VoiceAssistantButton() {
  const [room, setRoom] = useState<Room | null>(null);
  const [connected, setConnected] = useState(false);

  const startConversation = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/v1/agent/token-2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roomName: "appointment-room",
          userName: "user1",
        }),
      });

      const { token } = await res.json();

      const newRoom = new Room();

      // Connect to LiveKit room
      await newRoom.connect("wss://smart-care-e7t8ptu8.livekit.cloud", token);

      // Create local audio track (microphone)
      const [audioTrack] = await createLocalTracks({ audio: true });
      await newRoom.localParticipant.publishTrack(audioTrack);

      // Play agent audio
      newRoom.on("trackSubscribed", (track: Track) => {
        console.log(track.kind);
        if (track.kind === "audio") {
          const el = track.attach();
          el.autoplay = true;
          el.controls = false;
          document.body.appendChild(el);
        }
      });

      newRoom.on("trackUnsubscribed", (track: Track) => {
        track.detach().forEach((el) => el.remove());
      });

      setRoom(newRoom);
      setConnected(true);
      console.log("🎤 Connected! Microphone sent. Agent audio ready.");
    } catch (err) {
      console.error("Connection error:", err);
    }
  };

  return (
    <div>
      {!connected ? (
        <button onClick={startConversation}>Talk to Assistant</button>
      ) : (
        <p>Connected. Start speaking to the agent now!</p>
      )}
    </div>
  );
}
