var canon,canonImg,canonBall,canonBallImg,coins,coinsImg,ship,shipImg,background,backgroundImg;

function preload(){
canonImg = loadImage("Images/Canon0.png")
canonBallImg = loadImage("Images/canonBall0.png")
coinsImg = loadImage("Images/coin1.png")
shipImg = loadImage("Images/Player0.png")
backgroundImg = loadImage("Images/pic.jpg")


}



function setup() {
 createCanvas(displayWidth,displayHeight);
canon= createSprite(displayWidth/2,displayHeight/2,50,50);
canon.addImage("ufoBlue_1",canonImg);
canon.scale = 2;
canonBall= createSprite(20,200,10,10);
canonBall.addImage("eightball_1",canonBallImg);
canonBall.scale = 0.5
coins= createSprite(displayWidth/2,50,25,25);
coins.addImage("coin_gold_1",coinsImg);
coins.scale = 0.5;
ship= createSprite(100,50,25,25);
ship.addImage("ship16_1",shipImg);
ship.scale=1;

}

function draw() {
  background(backgroundImg);
  






  drawSprites();
}
