var dog,happydog;
var database;
var foodS,foodStock;


function preload()
{
 dog2=loadImage("images/dogImg.png");
 dog3=loadImage("images/dogImg1.png");

}

function setup() {
  database=firabase.database();
	createCanvas(500,500);

  dog=createSprite(200,300,20,20);
  dog.addImage(dog2);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  text(20);

    }


function draw() {  

  background("46,139,87");

  if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dog3);

}

 drawSprites();
  fill(255,255,254);
  stroke('black');
  text("Food remaining: "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW key to feed the Drago milk!" ,130,10,300,20);

  }


function redStock(data){
food.S=data.val();

}

function writeStock(x){
  if(x<=0){
    x=0;
         }
else{
  x=x-1;
    }

database.ref('/').update({
  Food:x


})


}








