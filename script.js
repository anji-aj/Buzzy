// ===============================
// Traffic Racing Bike Game
// Main Launcher
// ===============================

window.addEventListener("load", () => {

    const loading = document.getElementById("loadingScreen");
    const progress = document.getElementById("loadingProgress");

    let value = 0;

    const loader = setInterval(() => {

        value += 5;

        progress.style.width = value + "%";

        if (value >= 100) {

            clearInterval(loader);

            setTimeout(() => {

                loading.style.display = "none";

            }, 300);

        }

    }, 40);

});

// -------------------------------

const playBtn = document.getElementById("playBtn");
const startScreen = document.getElementById("startScreen");

const hud = document.getElementById("hud");

const pauseBtn = document.getElementById("pauseBtn");

const gameOver = document.getElementById("gameOver");

playBtn.onclick = () => {

    startScreen.style.display = "none";

    hud.style.display = "flex";

    pauseBtn.style.display = "block";

    startGame();

};

// -------------------------------

function startGame(){

    console.log("Game Started");

}
