var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState,PLAY;

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY =4;

  ghost = createSprite(280,450,20,20);
  ghost. addImage("ghost",ghostImg);
  ghost.scale= 0.5;

  invisibleBlock = new Group();
  door = new Group();

  invisibleBlock=false;
  
}

function draw() {

  if (gameState==PLAY){
    background(0);
    ghost.x = World.mouseX;
    
    edges= createEdgeSprites();
    ghost.collide(edges);
  }
  
  if(tower.y > 400){
      tower.y = 300
    }
    
    if (invisibleBlock.isTouching(ghost)) {
      textSize(50);
      fill(255);
        text("GameOver");
        gameState=END;


    }
    
    
    

    drawSprites();
}
