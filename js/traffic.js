// ======================================
// TRAFFIC
// File: js/traffic.js
// ======================================

const traffic = [];

const trafficColors = [
    "#ff3b30",
    "#007aff",
    "#34c759",
    "#ff9500",
    "#af52de",
    "#8e8e93"
];

let trafficSpawnTimer = 0;

// ----------------------------
// Create Traffic Vehicle
// ----------------------------

function spawnTraffic() {

    const laneWidth = road.width / 3;

    const lane = Math.floor(Math.random() * 3);

    const vehicle = {
        width: 60,
        height: 110,
        x: road.x + lane * laneWidth + laneWidth / 2 - 30,
        y: -120,
        speed: game.speed + Math.random() * 3 + 2,
        color: trafficColors[Math.floor(Math.random() * trafficColors.length)]
    };

    traffic.push(vehicle);
}

// ----------------------------
// Update Traffic
// ----------------------------

function updateTraffic() {

    trafficSpawnTimer++;

    // Spawn every 60 frames
    if (trafficSpawnTimer > 60) {
        spawnTraffic();
        trafficSpawnTimer = 0;
    }

    for (let i = traffic.length - 1; i >= 0; i--) {

        traffic[i].y += traffic[i].speed;

        // Remove off-screen vehicles
        if (traffic[i].y > canvas.height + 150) {
            traffic.splice(i, 1);
        }
    }
}

// ----------------------------
// Draw Traffic
// ----------------------------

function drawTraffic() {

    traffic.forEach(vehicle => {

        // Vehicle body
        ctx.fillStyle = vehicle.color;
        ctx.fillRect(
            vehicle.x,
            vehicle.y,
            vehicle.width,
            vehicle.height
        );

        // Windshield
        ctx.fillStyle = "#cceeff";
        ctx.fillRect(
            vehicle.x + 10,
            vehicle.y + 10,
            vehicle.width - 20,
            25
        );

        // Wheels
        ctx.fillStyle = "black";

        ctx.fillRect(vehicle.x - 4, vehicle.y + 15, 8, 20);
        ctx.fillRect(vehicle.x + vehicle.width - 4, vehicle.y + 15, 8, 20);

        ctx.fillRect(vehicle.x - 4, vehicle.y + vehicle.height - 35, 8, 20);
        ctx.fillRect(vehicle.x + vehicle.width - 4, vehicle.y + vehicle.height - 35, 8, 20);
    });
}