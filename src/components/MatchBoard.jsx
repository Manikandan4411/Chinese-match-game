import React, { useState, useEffect } from "react";
import vocabulary from "../data/vocabulary";
import useShuffle from "../hooks/useShuffle";
import "../styles/board.css";
import "../styles/card.css";
import ScoreBoard from "./ScoreBoard";
import NextRoundButton from "./NextRoundButton";

function MatchBoard() {
  const [chineseWords, setChineseWords] = useState([]);
  const [englishWords, setEnglishWords] = useState([]);
  const [selectedChinese, setSelectedChinese] = useState(null);
  const [selectedEnglish, setSelectedEnglish] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [wrongPair, setWrongPair] = useState(null);
  const [score, setScore] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const shuffle = useShuffle();

  // initialize round
  useEffect(() => {
    startNewRound();
  }, [shuffle]);

  const startNewRound = () => {
    const shuffled = shuffle(vocabulary);
    const selected = shuffled.slice(0, 5);
    setChineseWords(selected);
    setEnglishWords(shuffle(selected));
    setMatchedPairs([]);
    setScore(0);
    setWrongCount(0);
    setSelectedChinese(null);
    setSelectedEnglish(null);
    setWrongPair(null);
  };

  // 🔊 Speak Chinese word
  const speakChinese = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN";
    speechSynthesis.speak(utterance);
  };

  const handleChineseClick = (word) => {
    if (isMatched(word)) return;
    setSelectedChinese(word);
    speakChinese(word.chinese); // 👈 play pronunciation automatically

    // Add glow animation class
    const el = document.getElementById(`chinese-${word.id}`);
    if (el) {
      el.classList.add("speaking");
      setTimeout(() => el.classList.remove("speaking"), 600);
    }
  };

  const handleEnglishClick = (word) => {
    if (isMatched(word)) return;
    setSelectedEnglish(word);

    if (selectedChinese) {
      if (word.id === selectedChinese.id) {
        // ✅ Correct match
        setMatchedPairs((prev) => [...prev, word.id]);
        setScore((prev) => prev + 1);
        setSelectedChinese(null);
        setSelectedEnglish(null);
      } else {
        // ❌ Wrong match
        setWrongPair({ chinese: selectedChinese.id, english: word.id });
        setWrongCount((prev) => prev + 1);
        setTimeout(() => {
          setWrongPair(null);
          setSelectedChinese(null);
          setSelectedEnglish(null);
        }, 800);
      }
    }
  };

  const isMatched = (word) => matchedPairs.includes(word.id);

  const getCardClass = (word, type) => {
    const isSelected =
      type === "chinese"
        ? selectedChinese?.id === word.id
        : selectedEnglish?.id === word.id;

    const isWrong =
      wrongPair &&
      ((type === "chinese" && wrongPair.chinese === word.id) ||
        (type === "english" && wrongPair.english === word.id));

    return `card ${isSelected ? "selected" : ""} ${
      isMatched(word) ? "matched" : ""
    } ${isWrong ? "wrong" : ""}`;
  };

  return (
    <div className="match-board">
      {/* Header */}
      <h1 className="game-title">🇨🇳 Chinese Match Game</h1>

      {/* Score */}
      <p className="score-display">Score: {score} / 5</p>

      {/* Columns */}
      <div className="columns-container">
        <div className="column">
          <h2>Chinese</h2>
          {chineseWords.map((word) => (
            <button
              id={`chinese-${word.id}`}
              key={word.id}
              className={getCardClass(word, "chinese")}
              onClick={() => handleChineseClick(word)}
              disabled={isMatched(word)}
            >
              <div className="chinese-box">
                <span className="chinese-text">{word.chinese}</span>
                <span className="pinyin-text">{word.pinyin}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="column">
          <h2>English</h2>
          {englishWords.map((word) => (
            <button
              key={word.id}
              className={getCardClass(word, "english")}
              onClick={() => handleEnglishClick(word)}
              disabled={isMatched(word)}
            >
              {word.english}
            </button>
          ))}
        </div>
      </div>

      {/* ScoreBoard Component */}
      <ScoreBoard correct={score} wrong={wrongCount} total={5} />

      {/* Next Round Button */}
      <NextRoundButton
        onNextRound={startNewRound}
        isVisible={matchedPairs.length === 5}
      />
    </div>
  );
}

export default MatchBoard;
