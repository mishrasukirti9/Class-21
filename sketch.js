var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 
  ChiragRect = createSprite(100, 400, 50, 80);
  ChiragRect.shapeColor = "green";

  SukirtiRect = createSprite(900, 400, 50, 80);
  SukirtiRect.shapeColor = "green";
 
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else if(isTouching(movingRect,ChiragRect)){
    movingRect.shapeColor = "red";
    ChiragRect.shapeColor = "red";
  }
  else if(isTouching(movingRect,SukirtiRect)){
    movingRect.shapeColor = "red";
    SukirtiRect.shapeColor = "red";
  }

 else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  ChiragRect.shapeColor = "green";
  SukirtiRect.shapeColor = "green";
 }
  drawSprites();
}

