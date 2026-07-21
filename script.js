const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let road = {
    x: canvas.width/2 - 180,
    width:360,
    speed:8
};


let bike = {
    x:canvas.width/2,
    y:canvas.height-150,
    width:45,
    height:90,
    speed:8,
    color:"cyan"
};


let cars=[];
let score=0;
let gameOver=false;
let keys={};


document.addEventListener("keydown",e=>{
    keys[e.key]=true;
});

document.addEventListener("keyup",e=>{
    keys[e.key]=false;
});



function createCar(){

    let lanes=[
        road.x+40,
        road.x+150,
        road.x+260
    ];

    cars.push({
        x:lanes[Math.floor(Math.random()*3)],
        y:-120,
        width:50,
        height:90,
        speed:road.speed+2,
        color:"red"
    });

}


setInterval(()=>{
    if(!gameOver)
    createCar();
},1200);



function update(){

    if(gameOver)return;


    if(keys["ArrowLeft"] && bike.x>road.x)
        bike.x-=bike.speed;


    if(keys["ArrowRight"] && bike.x<road.x+road.width-bike.width)
        bike.x+=bike.speed;



    cars.forEach(car=>{

        car.y+=car.speed;


        if(car.y>canvas.height){
            cars.shift();
            score++;
        }


        if(
            bike.x < car.x+car.width &&
            bike.x+bike.width > car.x &&
            bike.y < car.y+car.height &&
            bike.y+bike.height > car.y
        ){
            gameOver=true;
        }

    });


    road.speed+=0.001;

    document.getElementById("score").innerHTML=score;
    document.getElementById("speed").innerHTML=Math.floor(road.speed*10);

}



function drawRoad(){

    ctx.fillStyle="#228B22";
    ctx.fillRect(0,0,canvas.width,canvas.height);


    ctx.fillStyle="#333";
    ctx.fillRect(
        road.x,
        0,
        road.width,
        canvas.height
    );


    ctx.strokeStyle="white";
    ctx.lineWidth=5;


    for(let y=0;y<canvas.height;y+=80){

        ctx.beginPath();

        ctx.moveTo(canvas.width/2,y);
        ctx.lineTo(canvas.width/2,y+40);

        ctx.stroke();

    }

}



function drawBike(){

    ctx.fillStyle=bike.color;

    ctx.fillRect(
        bike.x,
        bike.y,
        bike.width,
        bike.height
    );


    ctx.fillStyle="black";
    ctx.fillRect(
        bike.x+10,
        bike.y+20,
        25,
        50
    );

}



function drawCars(){

    cars.forEach(car=>{

        ctx.fillStyle=car.color;

        ctx.fillRect(
            car.x,
            car.y,
            car.width,
            car.height
        );


        ctx.fillStyle="yellow";

        ctx.fillRect(
            car.x+10,
            car.y+10,
            10,
            15
        );

    });

}



function drawGameOver(){

    if(gameOver){

        ctx.fillStyle="white";
        ctx.font="60px Arial";
        ctx.fillText(
            "CRASH!",
            canvas.width/2-100,
            canvas.height/2
        );


        ctx.font="25px Arial";

        ctx.fillText(
            "Refresh to restart",
            canvas.width/2-120,
            canvas.height/2+50
        );
    }

}



function gameLoop(){

    update();

    drawRoad();

    drawBike();

    drawCars();

    drawGameOver();


    requestAnimationFrame(gameLoop);

}


gameLoop();
