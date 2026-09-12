import React from "react";
import "../styles/app.css"; // reuse existing style

function LevelSelect({ onSelect }) {
  const levels = [
    { label: "1–20", range: [0, 20] },
    { label: "21–40", range: [20, 40] },
    { label: "41–60", range: [40, 60] },
    { label: "61–80", range: [60, 80] },
    { label: "81–100", range: [80, 100] },
    { label: "101–120", range: [100, 120] },
    { label: "121–150", range: [120, 150] },
  ];

  return (
    <div className="level-page">
      <h1 className="title">HSK Level 1</h1>
      <p className="subtitle">150 Words</p>
      <div className="level-grid">
        {levels.map((lvl, idx) => (
          <button
            key={idx}
            className="level-button"
            onClick={() => onSelect(lvl.range)}
          >
            {lvl.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LevelSelect;
