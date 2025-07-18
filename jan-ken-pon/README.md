# ✊📄✂️ Jan Ken Pon (Rock Paper Scissors)

[![Made with HTML, CSS & JS](https://img.shields.io/badge/Made%20with-HTML%2C%20CSS%2C%20JS-orange.svg?style=for-the-badge&logo=html5)](https://developer.mozilla.org/en-US/docs/Web)
[![Status: Active](https://img.shields.io/badge/Status-Active-brightgreen.svg?style=for-the-badge)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

Welcome to **Jan Ken Pon**! This is my **very first personal project**, and I'm really glad to share this fun, minimal, and interactive web application. Built using **HTML**, **CSS**, and **JavaScript**, it's the classic Rock, Paper, Scissors game where you can play against a computer opponent and keep track of your score. Whether you're learning frontend development or looking for a mini-game to add to your portfolio, this is a great place to start.

---

## 📑 Table of Contents

- [🎮 Features](#-features)
- [⚙ How It Works](#-how-it-works)
- [🧠 Concepts Covered](#-concepts-covered)
- [📂 Project Structure](#-project-structure)
- [📷 Screenshots](#-screenshots)
- [📦 Technologies Used](#-technologies-used)
- [💻 Getting Started](#-getting-started)
- [🙌 Contributing](#-contributing)
- [📄 License](#-license)
- [📬 Contact](#-contact)


---

## 🎮 Features

* ✅ Clean and responsive UI
* 🤖 Play against a computer AI
* 🔢 Score tracking for wins, losses, and draws
* 🖼 Dynamic updates with emojis for choices
* 📱 Fully responsive – works on mobile and desktop
* ⚡ Lightning-fast with zero dependencies
* 👨‍🏫 Beginner-friendly code structure
* 🧩 Perfect for small JavaScript projects or code challenges

---

## ⚙ How It Works

1.  When you make your choice (Rock, Paper, or Scissors), the game immediately transitions to a comparison screen.
2.  A brief countdown starts, building anticipation for the computer's choice.
3.  The computer's choice is randomly generated using `Math.floor(Math.random() * 3)`.
4.  The result (Win, Lose, or Draw) is displayed, and your score is updated accordingly.
5.  You can then click "Play Again" to start a new round!

The entire game logic is written in **vanilla JavaScript** without any external libraries, and the visuals are handled with CSS for layout and responsiveness.

---

## 🧠 Concepts Covered

This project was a fantastic way for me to understand and practice:

* ✅ Basic **HTML structure** and semantics
* 🎨 **CSS styling**, animations, and responsive layout techniques
* 🧠 **DOM Manipulation** in JavaScript (selecting, adding/removing classes, updating text content)
* 🔁 **Event Handling** (responding to user clicks)
* 🧮 Using `Math.random()` and `Math.floor()` for random number generation
* ⏱ Implementing **timed functions** with `setTimeout` for the countdown
* 📱 Making websites **responsive** for different screen sizes

---

## 📂 Project Structure

Rock-Paper-Scissors/
│
├── index.html         # HTML layout and elements for the game
├── style.css          # Styling for game elements, modal, and responsiveness
├── script.js          # JavaScript logic for game rules, score, and interactions
└── README.md          # This file
