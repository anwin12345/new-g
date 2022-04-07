var bg1,bg1Img,h1,h1img;

function preload(){
bg1Img=loadImage("pics/bgggg.jpg");
h1img=loadAnimation("pics/a1.png","pics/a2.png","pics/a3.png","pics/a4.png","pics/a5.png");

}
function setup() {
  createCanvas(windowWidth,windowHeight);
  bg1 = createSprite(400, 100, 50, 80);
 bg1.addImage(bg1Img);
 bg1.scale=1.5;
 h1 = createSprite(100,560,20,5);
 h1.addAnimation("walking",h1img);
 h1.scale=0.9;

}

function draw() {
  background(0,0,0);  
if(keyDown("RIGHT_ARROW")){
  h1.velocityX=0.55;
}


  drawSprites();
}