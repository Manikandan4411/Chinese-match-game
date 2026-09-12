// src/App.jsx
import React, { useState } from "react"; // ✅ Added useState import
import "./styles/app.css";
import Header from "./components/Header";
import StartPage from "./components/StartPage";
import LevelSelect from "./components/LevelSelect";
import MatchBoard from "./components/MatchBoard";

function App() {
  const [page, setPage] = useState("start");
  const [selectedRange, setSelectedRange] = useState(null);

  const handleStart = () => setPage("levels");
  const handleLevelSelect = (range) => {
    setSelectedRange(range);
    setPage("game");
  };
  const handleBack = () => setPage("levels");

  return (
    <div className="app-container">
      {/* Optional header if you want it visible across pages */}
      <Header />

      {page === "start" && <StartPage onStart={handleStart} />}
      {page === "levels" && <LevelSelect onSelect={handleLevelSelect} />}
      {page === "game" && (
        <MatchBoard range={selectedRange} onBack={handleBack} />
      )}
    </div>
  );
}

export default App;
