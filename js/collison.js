// ======================================
// COLLISION
// File: js/collision.js
// ======================================

function checkCollision(rect1, rect2) {
    return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
    );
}

function updateCollision() {

    // trafficCars must be created in traffic.js
    if (typeof trafficCars === "undefined") {
        return;
    }

    for (let i = 0; i < trafficCars.length; i++) {

        if (checkCollision(player, trafficCars[i])) {

            gameRunning = false;

            const gameOver = document.getElementById("gameOver");
            const finalScore = document.getElementById("finalScore");

            finalScore.textContent = game.score;
            gameOver.style.display = "flex";

            return;
        }
    }
}