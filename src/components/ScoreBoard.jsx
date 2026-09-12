import React from "react";
import "../styles/scoreboard.css";

function ScoreBoard({ correct, total }) {
  const progress = (correct / total) * 100;

  return (
    <div className="scoreboard">
      <h3 className="score-text">Score: {correct} / {total}</h3>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="round-label">Round Progress</p>
    </div>
  );
}

export default ScoreBoard;
