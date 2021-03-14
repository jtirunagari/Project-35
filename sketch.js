var dog
var dogImage
var happyDog
var database
var foodS
var foodStock

function preload()
{
  dogImage=loadImage("images/dogImg.png")
	happyDog=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(800, 800);
  database=firebase.database()
  dog=createSprite(400,400,20,20)
  dog.addImage(dogImage)
  dog.scale=0.2
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
background("green")

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDog)
}
  drawSprites();
  textSize(25)
  fill("black")
  text("food left:",170,80)
  text("Click on the up arrow to feed the Dog!",170,120)
}
function writeStock(petFood){
  if(petFood<=0){
    petFood=0
  }
  else{
    petFood=petFood-1
  }
  database.ref('/').update({
    food:petFood
  })
}
function readStock(data){
  foodS=data.val();
}


