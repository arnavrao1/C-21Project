
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, groundObj, leftWall, rightWall
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
var balls_options ={
	restitution:0.9,
	density:1.2

}

	//Create the Bodies Here.
ball = Bodies.circle(200,20,50,balls_options)
World.add(world, ball)
groundObj = new Ground(width/2, 670, width, 20)
leftWall = new Ground(550, 600, 20, 120);
rightWall = new Ground(780, 600, 20, 120)
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(0);
  Engine.update(engine);
 groundObj.display()
 leftWall.display()
 rightWall.display()
 ellipse(ball.position.x, ball.position.y, 50, 50)
}

function keyPressed() {
if(keyCode == UP_ARROW) {
Matter.Body.applyForce(ball,{x:0, y:0},{x:0.05, y:-0.05})
}
}

