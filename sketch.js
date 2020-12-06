var a;
var circles=[];
var score = 0;
var bg = "sprites/morningimage.jpg";

function setup() {
  createCanvas(800,800);
  stroke(255)
    
  object = new Ground();
  stand = new Ground();

  block1 = new Box(330,275,30,40);
  block2 = new Box(360,275,30,40);
  block3 = new Box(390,275,30,40);
  block4 = new Box(420,275,30,40);
  block5 = new Box(450,275,30,40);
  block6 = new Box(480,275,30,50);
  block7 = new Box(510,275,30,40);
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  block16 = new Box(390,155,30,40);

 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1 
  
  Text("SCORE: " + score,750,40);

  object.display();
  
  stand.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon)
  
  slingShot = new SlingShot(this.polygon,{x:100,y:200});

  imageMode(CENTER)

  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 
fly 
  bodyA = null;



// camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 

function mouseDragged () {

}

function mouseReleased() {
  
}

function keyPressed() {
  if(keyCode === 32) {
    slingshot.attach(box.body);
  }
}

async function getBackgroundImg() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Amarica/Toronto");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour >= 06 && hour <= 18) {
    bg = "sprites/morningimage.jpg";
  }

  if(hour>= 18 && hour <= 06) {
    bg = "sprites/nightimage.jpg";
  }
    getBackgroundImg = loadImage(bg);
    console.log(getBackgroundImg);
}