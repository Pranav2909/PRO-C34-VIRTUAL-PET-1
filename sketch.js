//Create variables here
var dog,dogImg;
var happyDog,happyDogImg;
var database;
var foodS;
var foodStock;
function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
}


function draw() {  
  dogImg.loadImage("images/dogImg.png");
  dog = createSprite(250,250,10,10);

  drawSprites();
  //add styles here

}



