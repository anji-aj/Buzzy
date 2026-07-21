// ======================================
// STORAGE MANAGER
// File: js/storage.js
// ======================================

const STORAGE_KEYS = {
    HIGH_SCORE: "buzzy_high_score",
    COINS: "buzzy_coins",
    BIKE: "buzzy_selected_bike"
};

// --------------------------
// High Score
// --------------------------

function getHighScore() {

    return parseInt(localStorage.getItem(STORAGE_KEYS.HIGH_SCORE)) || 0;

}

function saveHighScore(score) {

    const highScore = getHighScore();

    if (score > highScore) {

        localStorage.setItem(
            STORAGE_KEYS.HIGH_SCORE,
            score
        );

    }

}

// --------------------------
// Coins
// --------------------------

function getCoins() {

    return parseInt(localStorage.getItem(STORAGE_KEYS.COINS)) || 0;

}

function saveCoins(coins) {

    localStorage.setItem(
        STORAGE_KEYS.COINS,
        coins
    );

}

// --------------------------
// Selected Bike
// --------------------------

function getSelectedBike() {

    return localStorage.getItem(
        STORAGE_KEYS.BIKE
    ) || "bike1";

}

function saveSelectedBike(bikeName) {

    localStorage.setItem(
        STORAGE_KEYS.BIKE,
        bikeName
    );

}

// --------------------------
// Reset Game Data
// --------------------------

function resetGameData() {

    localStorage.removeItem(STORAGE_KEYS.HIGH_SCORE);

    localStorage.removeItem(STORAGE_KEYS.COINS);

    localStorage.removeItem(STORAGE_KEYS.BIKE);

}

// --------------------------
// Show Saved Data
// --------------------------

function loadSavedData() {

    console.log("High Score :", getHighScore());

    console.log("Coins :", getCoins());

    console.log("Bike :", getSelectedBike());

}