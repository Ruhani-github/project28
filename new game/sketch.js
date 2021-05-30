var introbg , introbgimg
var playbutton ,playbuttonimg
var gameState = "start" ;
var airportbgimg
var girl , girlimg
var seaimg
var ship,shipimg
var ursula,ursulaimg


function preload (){
  introbgimg = loadImage("introimg/piratebg.jpeg");
  playbuttonimg = loadImage("introimg/Play-Button.png");
  airportbgimg = loadImage ("introimg/airportbg.png");
  girlimg = loadAnimation ("girlimg/tile000.png","girlimg/tile001.png","girlimg/tile002.png")
  seaimg = loadImage("l1img/sea.png");
  shipimg = loadAnimation("l1img/ship-1.png","l1img/ship-2.png","l1img/ship-3.png","l1img/ship-4.png")
  ursulaimg = loadAnimation("l1img/ursula.png","l1img/ursula2.png","l1img/ursula3.png","l1img/ursula4.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  createSprite(400, 200, 50, 50);
 introbg = createSprite (800,500,windowWidth , windowHeight);
 introbg.addImage("bg1",introbgimg)
 introbg.addImage("bg2",airportbgimg);
 introbg.scale = 3;
 introbg.addImage("bg3",seaimg);
 
 playbutton = createSprite (800,600)
 playbutton.addImage("start",playbuttonimg);
 playbutton.scale = 0.09;

 girl = createSprite (400,600)
 girl.addAnimation("girl",girlimg);
 girl.visible = false;
 girl.velocityX = 3;
 girl.scale = 0.5;
 ship = createSprite (400,500)
 ship.addAnimation("ship",shipimg);
 ship.visible = false;
 ursula = createSprite (1430,600)
 ursula.addAnimation("ursula",ursulaimg);
 ursula.scale = 6;
 

//introbg.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  drawSprites();
  
  
  if (gameState === "start"){
    fill("white");
    textSize(20);
    text("Welcome to finding the tresure",800,230);
    text("Type your name and enter",800,260);
    ursula.visible = false;
    if(mousePressedOver (playbutton)){
      gameState = "intro";
    }
  
  }
  else if (gameState=== "intro"){
    introbg.changeImage("bg2");
    introbg.scale=1;
    playbutton.visible = false;
    girl.visible = true;
    ursula.visible = false;
    if(girl.x >= 1100){
      gameState = "l1"
    }
  }
  else if (gameState === "l1"){
introbg.changeImage("bg3");
//introbg.scale = 1;
girl.visible = false;
ship.visible = true;
ursula.visible = true;
  }

  
}