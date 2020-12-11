var PLAY=1;
var END=0;
var gameState=PLAY;  
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,foods
var ground;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
  background(255)
  if(gameState===PLAY){
    stroke("black");
    textSize(20);
    fill("black");
    survivalTime=Math.ceil(frameCount/frameRate());
    text("Survival Time:"+survivalTime,100,50);
  if(ground.x>0){
    ground.x=200;
  }
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
  }
    monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  obstacles();
  food();
    
      
    if(obstacleGroup.isTouching(monkey)){
        //trex.velocityY = -12;
        gameState = END;  
    }
  }
  else if (gameState === END){
    obstacleGroup.setVelocityX=0;
    FoodGroup.setVelocityx=0;
    ground.velocityX=0;
    survivalTime=0;
    textSize(20);
    text("GAME OVER",200,200);
  }
drawSprites();
}
function obstacles(){
  if (frameCount%130===0){    
  obstacle=createSprite(400,330,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
  obstacle.velocityX=-6;
   obstacle.lifeTime=134;
    obstacleGroup.add(obstacle);
  }
}
function food(){
  if(frameCount%70===0){
    foods=createSprite(400,200,20,20);
    foods.addImage(bananaImage);
    foods.scale=0.1;
    foods.velocityX=-5;
    FoodGroup.add(foods)
  }
}




