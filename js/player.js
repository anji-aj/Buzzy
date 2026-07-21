// ======================================
// PLAYER
// File: js/player.js
// ======================================

const player = {

    width: 50,
    height: 100,

    x: canvas.width / 2 - 25,
    y: canvas.height - 140,

    speed: 8,

    image: new Image()

};

// Bike Image
player.image.src = "assets/bikes/bike.png";

// ----------------------------
// Keyboard Input
// ----------------------------

const keys = {};

window.addEventListener("keydown", (e) => {

    keys[e.key] = true;

});

window.addEventListener("keyup", (e) => {

    keys[e.key] = false;

});

// ----------------------------
// Update Player
// ----------------------------

function updatePlayer() {

    if (keys["ArrowLeft"] || keys["a"]) {

        player.x -= player.speed;

    }

    if (keys["ArrowRight"] || keys["d"]) {

        player.x += player.speed;

    }

    if (keys["ArrowUp"] || keys["w"]) {

        game.speed += 0.05;

    }

    if (keys["ArrowDown"] || keys["s"]) {

        game.speed -= 0.05;

    }

    // Speed Limits

    if (game.speed < 4)
        game.speed = 4;

    if (game.speed > 20)
        game.speed = 20;

    // Road Limits

    const leftLimit = canvas.width * 0.25;

    const rightLimit = canvas.width * 0.75 - player.width;

    if (player.x < leftLimit)
        player.x = leftLimit;

    if (player.x > rightLimit)
        player.x = rightLimit;

}

// ----------------------------
// Draw Player
// ----------------------------

function drawPlayer() {

    if (player.image.complete) {

        ctx.drawImage(

            player.image,

            player.x,

            player.y,

            player.width,

            player.height

        );

    } else {

        ctx.fillStyle = "red";

        ctx.fillRect(

            player.x,

            player.y,

            player.width,

            player.height

        );

    }

}