// src/App.jsx
import React from "react";
import "./styles/app.css";
import Header from "./components/Header";
import MatchBoard from "./components/MatchBoard";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="game-board">
        <MatchBoard />
      </main>
    </div>
  );
}

export default App;
