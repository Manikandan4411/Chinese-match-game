import React from "react";
import { FaVolumeUp } from "react-icons/fa"; // optional icon
import "../styles/speaker.css";

function SpeakerButton({ text }) {
  const speakChinese = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN"; // Chinese language code
    speechSynthesis.speak(utterance);
  };

  return (
    <button className="speaker-btn" onClick={speakChinese} title="Play pronunciation">
      <FaVolumeUp />
    </button>
  );
}

export default SpeakerButton;
