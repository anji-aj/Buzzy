// ======================================
// ROAD
// File: js/road.js
// ======================================

const road = {
    width: 500,
    x: 0,
    lineWidth: 10,
    lineHeight: 60,
    gap: 40,
    offset: 0
};

// ----------------------------
// Update Road
// ----------------------------

function updateRoad() {

    road.width = canvas.width * 0.5;
    road.x = (canvas.width - road.width) / 2;

    road.offset += game.speed;

    if (road.offset >= road.lineHeight + road.gap) {
        road.offset = 0;
    }

}

// ----------------------------
// Draw Road
// ----------------------------

function drawRoad() {

    // Grass
    ctx.fillStyle = "#2E7D32";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Road
    ctx.fillStyle = "#555";
    ctx.fillRect(
        road.x,
        0,
        road.width,
        canvas.height
    );

    // Left Border
    ctx.fillStyle = "white";

    ctx.fillRect(
        road.x,
        0,
        6,
        canvas.height
    );

    // Right Border

    ctx.fillRect(
        road.x + road.width - 6,
        0,
        6,
        canvas.height
    );

    // Lane Markings

    ctx.fillStyle = "yellow";

    for (
        let y = -road.offset;
        y < canvas.height;
        y += road.lineHeight + road.gap
    ) {

        ctx.fillRect(
            canvas.width / 2 - road.lineWidth / 2,
            y,
            road.lineWidth,
            road.lineHeight
        );

    }

}