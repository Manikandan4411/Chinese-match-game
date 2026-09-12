import React from "react";
import "../styles/app.css"; // reuse existing style

function StartPage({ onStart }) {
  return (
    <div className="start-page">
      <h1 className="title">Chinese Match Game</h1>
      <p className="subtitle">Learn Chinese by matching words</p>
      <button className="start-button" onClick={onStart}>
        START GAME
      </button>
    </div>
  );
}

export default StartPage;
