import React from "react";
import "../styles/nextround.css";

function NextRoundButton({ onNextRound, isVisible }) {
  if (!isVisible) return null;

  return (
    <div className="next-round-container">
      <button className="next-round-btn" onClick={onNextRound}>
        NEXT ROUND
      </button>
    </div>
  );
}

export default NextRoundButton;
