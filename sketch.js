
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1;

function preload(){
	
}

function setup() {
	createCanvas(1600, 800);
	engine = Engine.create();
	world = engine.world;

  bobDiameter=40;

  startBobPositionX=width/2;
	startBobPositionY=height/4+500;

  rope1=new String(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);

  stand=new Roof(800,200,1000,50);

  bob1=new Bob(400,450);
	bob2=new Bob(600,450);
	bob3=new Bob(800,450);
	bob4=new Bob(1000,450);
  bob5=new Bob(1200,450);
  
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background('lightblue');
  
  stand.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
}