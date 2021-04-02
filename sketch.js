
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope;
var roofObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(250,250,30);
	bobObject2 = new Bob(260,250,30);
	bobObject3 = new Bob(350,250,30);
	bobObject4 = new Bob(400,250,30);
	bobObject5 = new Bob(450,250,30);

	roof = new Roof(400,200,500,40);
	
	rope1 = new Rope(bobObject1.body,roof.body,-50*2,0);
	rope2 = new Rope(bobObject2.body,roof.body, -20*2.5,0);
	rope3 = new Rope(bobObject3.body,roof.body,10*2,0);
	rope4 = new Rope(bobObject4.body,roof.body,40*2,0);
	rope5 = new Rope(bobObject5.body,roof.body,70*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
  keyPressed();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-50}); } 
}

