var block

function setup() {
  createCanvas(400,400);
  block = createSprite(185,185,50,50);
  background("white");
}

function draw() 
{
 
  if(mousePressedOver(block)){
    background(random(0,225),random(0,225),random(0,225))
  }
  
  block.depth = block.depth+1
  

 drawSprites()
}


 

