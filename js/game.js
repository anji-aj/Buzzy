// =======================================
// Traffic Racing Bike Game Engine
// File: js/game.js
// =======================================

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Resize canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// -------------------------------
// Game Variables
// -------------------------------

let gameRunning = false;
let roadOffset = 0;

const game = {
    speed: 8,
    score: 0,
    distance: 0,
    coins: 0
};

// -------------------------------
// Player Bike
// -------------------------------

const player = {
    width: 50,
    height: 100,
    x: window.innerWidth / 2 - 25,
    y: window.innerHeight - 140,
    speed: 8
};

// -------------------------------
// Keyboard Controls
// -------------------------------

const keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});

// -------------------------------
// Update
// -------------------------------

function update() {

    // Move Bike
    if (keys["ArrowLeft"] || keys["a"]) {
        player.x -= player.speed;
    }

    if (keys["ArrowRight"] || keys["d"]) {
        player.x += player.speed;
    }

    // Keep Bike Inside Road
    const leftLimit = canvas.width * 0.25;
    const rightLimit = canvas.width * 0.75 - player.width;

    if (player.x < leftLimit) player.x = leftLimit;
    if (player.x > rightLimit) player.x = rightLimit;

    // Scroll Road
    roadOffset += game.speed;

    if (roadOffset > 80) {
        roadOffset = 0;
    }

    game.score++;
    game.distance += game.speed;

    // Update HUD
    document.getElementById("speed").textContent = game.speed * 10;
    document.getElementById("score").textContent = game.score;
    document.getElementById("distance").textContent = Math.floor(game.distance / 10);
    document.getElementById("coins").textContent = game.coins;
}

// -------------------------------
// Draw Road
// -------------------------------

function drawRoad() {

    const roadWidth = canvas.width * 0.5;
    const roadX = (canvas.width - roadWidth) / 2;

    // Grass
    ctx.fillStyle = "#2e7d32";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Road
    ctx.fillStyle = "#555";
    ctx.fillRect(roadX, 0, roadWidth, canvas.height);

    // Road Borders
    ctx.fillStyle = "white";
    ctx.fillRect(roadX, 0, 6, canvas.height);
    ctx.fillRect(roadX + roadWidth - 6, 0, 6, canvas.height);

    // Lane Markings
    ctx.fillStyle = "yellow";

    for (let y = -roadOffset; y < canvas.height; y += 80) {
        ctx.fillRect(canvas.width / 2 - 4, y, 8, 40);
    }
}

// -------------------------------
// Draw Bike
// -------------------------------

function drawBike() {

    // Body
    ctx.fillStyle = "red";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Wheels
    ctx.fillStyle = "black";

    ctx.beginPath();
    ctx.arc(player.x + 10, player.y + 10, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(player.x + 40, player.y + 90, 8, 0, Math.PI * 2);
    ctx.fill();
}

// -------------------------------
// Render
// -------------------------------

function render() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawRoad();
    drawBike();
}

// -------------------------------
// Game Loop
// -------------------------------

function gameLoop() {

    if (!gameRunning) return;

    update();
    render();

    requestAnimationFrame(gameLoop);
}

// -------------------------------
// Start Game
// -------------------------------

function startGame() {

    gameRunning = true;
    gameLoop();
}