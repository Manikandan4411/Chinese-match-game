# 🇨🇳 Chinese Match Game

A React-based Chinese-English vocabulary matching game inspired by language-learning apps like Duolingo. Learn Chinese vocabulary through interactive matching, randomized words, pronunciation, and level-based learning.

## 📌 Description

Chinese Match Game is a frontend-based language learning application built with React and Vite. Users can select HSK Level 1 vocabulary ranges from 1–150 words and practice Chinese-English matching through interactive game rounds.

Each level displays five vocabulary pairs at a time. Users match Chinese words with their correct English meanings, receive green/red feedback, track their progress, and complete each level through multiple rounds.

## ✨ Features

* 🇨🇳 Chinese-English vocabulary matching
* 📚 HSK Level 1 vocabulary (1–150 words)
* 🎯 Seven vocabulary range selections
* 🎲 Randomized vocabulary
* 🔀 Shuffled English words
* 🟢 Green feedback for correct matches
* 🔴 Red feedback for incorrect matches
* 🔊 Chinese pronunciation
* ⭐ Score tracking
* 📊 Dynamic round progress bar
* 🎮 Five-word matching rounds
* 🔄 Play Again functionality
* ← Back to HSK Levels button
* 🎉 Level Completion screen
* 📱 Responsive user interface

## 📚 HSK Level 1 Vocabulary Ranges

| Level   | Vocabulary Range | Rounds   |
| ------- | ---------------- | -------- |
| Level 1 | 1–20             | 4 rounds |
| Level 2 | 21–40            | 4 rounds |
| Level 3 | 41–60            | 4 rounds |
| Level 4 | 61–80            | 4 rounds |
| Level 5 | 81–100           | 4 rounds |
| Level 6 | 101–120          | 4 rounds |
| Level 7 | 121–150          | 6 rounds |

Each round contains 5 vocabulary pairs.

## 🎮 How It Works

1. Open the Chinese Match Game.
2. Click **START GAME**.
3. Select an HSK Level 1 vocabulary range.
4. The application loads the selected vocabulary words.
5. Chinese words and English translations are displayed in separate columns.
6. English words are randomly shuffled.
7. Select a Chinese word and its matching English meaning.
8. Correct matches turn green.
9. Incorrect matches turn red.
10. Complete all five pairs to proceed to the next round.
11. Track your round progress and score.
12. Complete the selected level to view the final score.
13. Choose PLAY AGAIN or BACK TO HSK LEVELS.

## 🛠️ Tech Stack

* React.js
* Vite
* JavaScript (ES6+)
* HTML5
* CSS3
* Browser Speech Synthesis API
* Git & GitHub

## 📂 Project Structure

```text
chinese-match-game/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── WordCard.jsx
│   │   ├── MatchBoard.jsx
│   │   ├── ScoreBoard.jsx
│   │   ├── NextRoundButton.jsx
│   │   └── SpeakerButton.jsx
│   │
│   ├── data/
│   │   └── vocabulary.jsx
│   │
│   ├── hooks/
│   │   └── useShuffle.js
│   │
│   ├── styles/
│   │   ├── app.css
│   │   ├── card.css
│   │   └── board.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

*Note: Update the file names above if your actual project structure differs.*

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
```

### 2. Navigate to the Project

```bash
cd chinese-match-game
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local development URL shown in the terminal.

## 🔢 Vocabulary Range Logic

The application uses zero-indexed JavaScript array slicing to load the correct vocabulary range.

```javascript
vocabulary.slice(0, 20);      // Words 1–20
vocabulary.slice(20, 40);     // Words 21–40
vocabulary.slice(40, 60);     // Words 41–60
vocabulary.slice(60, 80);     // Words 61–80
vocabulary.slice(80, 100);     // Words 81–100
vocabulary.slice(100, 120);    // Words 101–120
vocabulary.slice(120, 150);    // Words 121–150
```

## 🎯 Game Progress

* Levels 1–6 contain 20 vocabulary words.
* Each 20-word level contains 4 rounds.
* Each round contains 5 vocabulary pairs.
* Level 7 contains 30 vocabulary words.
* Level 7 contains 6 rounds.
* The progress bar updates dynamically as the user completes rounds.

## 🎉 Level Completion

After completing all rounds in a selected level, the application displays a Level Completion screen with:

* Final score
* Selected vocabulary range
* PLAY AGAIN button
* BACK TO HSK LEVELS button

### PLAY AGAIN

Restarts the same level from Round 1.

### BACK TO HSK LEVELS

Returns to the HSK Level 1 selection page and clears the current game state.

### SCREENSHOTS

Screenshots are uploaded.

## 🔮 Future Enhancements

### Phase 2 — Full Stack Integration

* Spring Boot REST API
* PostgreSQL database
* User registration and login
* Vocabulary management
* User progress tracking
* XP and streak system
* Persistent game scores

### Phase 3 — AI Features

* AI-generated Chinese vocabulary
* AI-generated matching questions
* Example sentence generation
* AI language tutor
* Personalized difficulty levels
* Conversation practice

## 🎯 Project Goal

The goal of this project is to build an interactive Chinese language learning experience while practicing React development, JavaScript logic, state management, reusable components, and game-based learning concepts.

## 📄 License

This project is created for learning and portfolio purposes.
