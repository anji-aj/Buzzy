// ==========================================
// GAME ENGINE
// js/game.js
// ==========================================

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Canvas Size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Game State
let gameRunning = false;

const game = {
    speed: 8,
    maxSpeed: 20,
    score: 0,
    distance: 0,
    coins: 0
};

// Road
const road = {
    x: canvas.width * 0.25,
    width: canvas.width * 0.5,
    lineWidth: 10,
    lineHeight: 60,
    lineGap: 40,
    offset: 0
};

// Player
const player = {
    width: 60,
    height: 120,
    x: canvas.width / 2 - 30,
    y: canvas.height - 160,
    speed: 12,
    color: "#ff0000"
};

// =======================
// Draw Road
// =======================

function drawRoad() {

    ctx.fillStyle = "#444";
    ctx.fillRect(road.x, 0, road.width, canvas.height);

    // Left Border
    ctx.fillStyle = "white";
    ctx.fillRect(road.x, 0, 8, canvas.height);

    // Right Border
    ctx.fillRect(
        road.x + road.width - 8,
        0,
        8,
        canvas.height
    );

    // Lane Divider
    ctx.fillStyle = "yellow";

    let y = -road.offset;

    while (y < canvas.height) {

        ctx.fillRect(
            canvas.width / 2 - road.lineWidth / 2,
            y,
            road.lineWidth,
            road.lineHeight
        );

        y += road.lineHeight + road.lineGap;
    }

    road.offset += game.speed;

    if (road.offset > road.lineHeight + road.lineGap)
        road.offset = 0;
}

// =======================
// Draw Bike
// =======================

function drawBike() {

    ctx.fillStyle = player.color;

    ctx.fillRect(
        player.x,
        player.y,
        player.width,
        player.height
    );

}

// =======================
// Update
// =======================

function update() {

    game.distance += game.speed / 10;
    game.score += 1;

    document.getElementById("speed").textContent =
        Math.floor(game.speed * 10);

    document.getElementById("score").textContent =
        game.score;

    document.getElementById("distance").textContent =
        Math.floor(game.distance);

}

// =======================
// Render
// =======================

function render() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawRoad();

    drawBike();

}

// =======================
// Loop
// =======================

function loop() {

    if (!gameRunning) return;

    update();

    render();

    requestAnimationFrame(loop);

}

// =======================
// Start
// =======================

function startGame() {

    gameRunning = true;

    loop();

}

// Resize
window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

});
