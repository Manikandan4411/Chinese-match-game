import React, { useState, useEffect } from "react";
import vocabulary from "../data/vocabulary";
import useShuffle from "../hooks/useShuffle";
import "../styles/board.css";
import "../styles/card.css";
import ScoreBoard from "./ScoreBoard";
import NextRoundButton from "./NextRoundButton";

function MatchBoard({ range, onBack }) {
  const [chineseWords, setChineseWords] = useState([]);
  const [englishWords, setEnglishWords] = useState([]);
  const [selectedChinese, setSelectedChinese] = useState(null);
  const [selectedEnglish, setSelectedEnglish] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [wrongPair, setWrongPair] = useState(null);
  const [score, setScore] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [roundIndex, setRoundIndex] = useState(0);
  const [levelComplete, setLevelComplete] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const shuffle = useShuffle();

  // ✅ Slice the vocabulary based on selected range
  const [start, end] = range || [0, 20];
  const selectedWords = vocabulary.slice(start, end);

  // ✅ Divide into rounds of 5
  const rounds = [];
  for (let i = 0; i < selectedWords.length; i += 5) {
    rounds.push(selectedWords.slice(i, i + 5));
  }

  const totalRounds = rounds.length;
  const progressPercent = ((roundIndex + 1) / totalRounds) * 100;

  // initialize round
  useEffect(() => {
    if (!levelComplete) {
      loadRound(roundIndex);
    }
  }, [roundIndex, range, levelComplete]);

  const loadRound = (index) => {
    const currentRound = rounds[index] || [];
    setChineseWords(currentRound);
    setEnglishWords(shuffle(currentRound));
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
    speakChinese(word.chinese);

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

  const handleNextRound = () => {
    if (roundIndex < rounds.length - 1) {
      setRoundIndex(roundIndex + 1);
    } else {
      // ✅ Level complete
      setFinalScore(score + matchedPairs.length); // total matches across last round
      setLevelComplete(true);
    }
  };

  const handlePlayAgain = () => {
    setRoundIndex(0);
    setLevelComplete(false);
    setFinalScore(0);
    loadRound(0);
  };

  const handleBack = () => {
    setRoundIndex(0);
    setLevelComplete(false);
    setFinalScore(0);
    onBack(); // navigate back to HSK Level selection
  };

  if (levelComplete) {
    return (
      <div className="completion-screen">
        <h1>🎉 Level Complete!</h1>
        <p>
          You completed HSK {start + 1}–{end}
        </p>
        <p>Final Score: {finalScore} / {selectedWords.length}</p>
        <div className="completion-buttons">
          <button onClick={handlePlayAgain}>PLAY AGAIN</button>
          <button onClick={handleBack}>BACK TO HSK LEVELS</button>
        </div>
      </div>
    );
  }

  return (
    <div className="match-board">
      {/* Header */}
      <h1 className="game-title">🇨🇳 Chinese Match Game</h1>

      {/* ✅ Progress Info */}
      <div className="progress-info">
        <p className="level-display">
          HSK {start + 1}–{end}
        </p>
        <p className="round-display">
          Round {roundIndex + 1} of {totalRounds}
        </p>
      </div>

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
      {/* <ScoreBoard correct={score} wrong={wrongCount} total={5} /> */}
      <ScoreBoard correct={score} total={5} />

      {/* Next Round Button */}
      <NextRoundButton
        onNextRound={handleNextRound}
        isVisible={matchedPairs.length === 5}
      />

      {/* Back Button */}
      <button className="back-button" onClick={handleBack}>
        ← Back to HSK Levels
      </button>
    </div>
  );
}

export default MatchBoard;
