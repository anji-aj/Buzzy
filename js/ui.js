// =====================================
// UI MANAGER
// File: js/ui.js
// =====================================

// UI Elements
const speedText = document.getElementById("speed");
const scoreText = document.getElementById("score");
const coinsText = document.getElementById("coins");
const distanceText = document.getElementById("distance");

const gameOverScreen = document.getElementById("gameOver");
const finalScore = document.getElementById("finalScore");

const pauseBtn = document.getElementById("pauseBtn");

// ----------------------------
// Update HUD
// ----------------------------

function updateUI() {

    speedText.textContent = Math.floor(game.speed * 10);

    scoreText.textContent = game.score;

    coinsText.textContent = game.coins;

    distanceText.textContent =
        Math.floor(game.distance);

}

// ----------------------------
// Game Over
// ----------------------------

function showGameOver() {

    gameRunning = false;

    finalScore.textContent = game.score;

    gameOverScreen.style.display = "flex";

}

// ----------------------------
// Hide Game Over
// ----------------------------

function hideGameOver() {

    gameOverScreen.style.display = "none";

}

// ----------------------------
// Pause Game
// ----------------------------

let paused = false;

pauseBtn.addEventListener("click", () => {

    paused = !paused;

    if (paused) {

        gameRunning = false;

        pauseBtn.innerHTML = "▶";

    } else {

        gameRunning = true;

        pauseBtn.innerHTML = "⏸";

        requestAnimationFrame(gameLoop);

    }

});

// ----------------------------
// Restart
// ----------------------------

function restartGame() {

    game.score = 0;

    game.coins = 0;

    game.distance = 0;

    game.speed = 8;

    hideGameOver();

    gameRunning = true;

    requestAnimationFrame(gameLoop);

}