var player
var shipimg;
var alienGroup;
var bulletGroup;



function preload()
{
	
}

function setup() {
	createCanvas(1420, 680);
	player = createSprite(710,580,50,50);

  alienGroup = new Group;
  bulletGroup = new Group;
	


	

	
  
}


function draw() {
  background("black")
  
  player.x = World.mouseX;

  if (keyDown("SPACE")) {
    spawnBullets();
  }

 

  
 spawnAliens();
  
  drawSprites();

  textSize(20);
  fill("white")
  text("GOAL OF THE GAME: defeat the aliens to get a high score",355,100);
  text("Game Rules: 1.move your mouse to move  2.press space to shoot  3.if the aliens cross the border, then you lose!",355,60);
  
  
 
}

function spawnAliens(){
  //write code here to spawn the clouds
if (frameCount % 20 === 0) {
  var alien = createSprite(600,0,50,50);
  alien.x = Math.round(random(0,1420));
  alien.y = 0;


  
  alien.velocityY = 5;
  alienGroup.add(alien);
  
   //assign lifetime to the variable
 
  
  //adjust the depth
  
  
  //add each cloud to the group
  
}

}

function spawnBullets(){
 
    var bullet = createSprite(200, 200,5,5);
    bullet.x=player.x;  
    bullet.y=player.y;
    bullet.velocityY=-10; 
    
    bullet.lifetime=100;

    bulletGroup.add(bullet);
    
    }










