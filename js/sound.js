// =====================================
// SOUND MANAGER
// File: js/sound.js
// =====================================

const sounds = {

    engine: new Audio("assets/sounds/engine.mp3"),

    crash: new Audio("assets/sounds/crash.mp3"),

    coin: new Audio("assets/sounds/coin.mp3"),

    nitro: new Audio("assets/sounds/nitro.mp3"),

    music: new Audio("assets/sounds/music.mp3")

};

// Loop Settings
sounds.engine.loop = true;
sounds.music.loop = true;

// Volume
sounds.engine.volume = 0.4;
sounds.music.volume = 0.3;
sounds.coin.volume = 0.8;
sounds.crash.volume = 1.0;
sounds.nitro.volume = 0.8;

// ----------------------
// Functions
// ----------------------

function playEngine() {

    sounds.engine.play().catch(() => {});

}

function stopEngine() {

    sounds.engine.pause();

    sounds.engine.currentTime = 0;

}

function playMusic() {

    sounds.music.play().catch(() => {});

}

function stopMusic() {

    sounds.music.pause();

    sounds.music.currentTime = 0;

}

function playCrash() {

    sounds.crash.currentTime = 0;

    sounds.crash.play().catch(() => {});

}

function playCoin() {

    sounds.coin.currentTime = 0;

    sounds.coin.play().catch(() => {});

}

function playNitro() {

    sounds.nitro.currentTime = 0;

    sounds.nitro.play().catch(() => {});

}

// ----------------------
// Mute / Unmute
// ----------------------

let muted = false;

function toggleSound() {

    muted = !muted;

    Object.values(sounds).forEach(sound => {

        sound.muted = muted;

    });

}