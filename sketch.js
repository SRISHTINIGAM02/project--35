var balloon,Balloon;
var background,Background;
function preload(){
   Background = loadImage("pro-C35 images/Hot Air Ballon-01.png");
   Balloon = loadImage("pro-C35 images/Hot Air Ballon-02.png");
  
}

function setup() {
  database= firebase.database();
  createCanvas(900,790);

 balloon = createSprite(400, 200, 50, 50);
 balloon.addAnimation("moving",Balloon);
}

function draw() {
  background(Background); 

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x -10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x +10
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y -10
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y +10
  }
  drawSprites();
}
function writePosition(x,y){
  database.ref('baloon/position').set({
    'x': position.x = x,
    'y': position.y = y
  })
}