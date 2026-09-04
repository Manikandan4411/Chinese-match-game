# 🇨🇳 Chinese Match Game

A simple and interactive **Chinese-English vocabulary matching game** inspired by language-learning applications like Duolingo. Users match Chinese words with their correct English meanings through an interactive card-based game.

## 📌 Description

**Chinese Match Game** is a frontend-based language learning project built with **React and Vite**. The application displays five randomly selected Chinese vocabulary words and their English translations in a shuffled order.

Users can tap a Chinese word and then select its corresponding English meaning. Correct matches are highlighted in **green**, while incorrect matches are highlighted in **red**. The game also provides Chinese pronunciation using the browser's built-in **Speech Synthesis API**.

The project is designed as **Phase 1** of a larger language-learning application. A backend, database, user progress tracking, and AI-powered learning features can be added in future phases.

## ✨ Features

* 🇨🇳 Chinese → English vocabulary matching
* 🎲 Randomly selected vocabulary
* 🔀 Shuffled English answers
* 🟢 Green feedback for correct matches
* 🔴 Red feedback for incorrect matches
* 🔊 Chinese word pronunciation
* ⭐ Score tracking
* 📊 Round progress
* 🔄 Next round functionality
* 📱 Responsive design
* ⚡ Fast development with React + Vite

## 🛠️ Tech Stack

* **React.js**
* **Vite**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **Browser Speech Synthesis API**
* **Git & GitHub**

## 🎮 How It Works

1. The application selects **5 random Chinese-English vocabulary pairs**.
2. Chinese words are displayed on the left.
3. English translations are displayed on the right.
4. English words are randomly shuffled.
5. The user selects a Chinese word.
6. The user selects its English meaning.
7. The application checks whether the pair is correct.
8. Correct matches turn **green**.
9. Incorrect matches turn **red**.
10. After matching all five pairs, the user can start the **next round**.

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
│   │   └── vocabulary.js
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

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
```

### 2. Navigate to the project

```bash
cd chinese-match-game
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal.

## 🔮 Future Enhancements

This project can be extended into a complete language-learning platform.

### Phase 2 — Full Stack

* Spring Boot REST API
* PostgreSQL database
* User registration/login
* Vocabulary management
* User scores
* Learning progress
* XP and streak system

### Phase 3 — AI Features

* AI-generated vocabulary
* AI-generated matching questions
* Example sentence generation
* AI language tutor
* Personalized difficulty
* AI-powered conversation practice

## 🎯 Project Goal

The goal of this project is to create a simple, interactive language-learning experience while practicing **React development, JavaScript logic, UI interaction, and game-based learning concepts**.

## 📄 License

This project is created for **learning and portfolio purposes**.
