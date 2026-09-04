import React from "react";
import "../styles/scoreboard.css";

function ScoreBoard({ correct, wrong, total }) {
  const progress = (correct / total) * 100;

  return (
    <div className="scoreboard">
      <h2 className="score-text">
        Score: {correct} / {total}
      </h2>

      <div className="details">
        <span className="correct">✅ Correct: {correct}</span>
        <span className="wrong">❌ Wrong: {wrong}</span>
      </div>

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
