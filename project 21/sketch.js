var bullet,wall;
var speed,weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(width-1500,200,50,50);
  bullet.velocityX=random(55,90)
  bullet.shapeColor="white"
  wall=createSprite(1500, 200, 60,thickness,weight/2);
  wall.shapeColor="brown";
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83)
}

function draw() {
  background("black")
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
   var damage= 0.5 * width * speed * speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}