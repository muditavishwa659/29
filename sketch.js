const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, body;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  base1 = new base(500,300,200,20);
  block1 = new block(330,235,30,40);
  block2 = new block(360,235,30,40);
  block3 = new block(390,235,30,40);
  block4 = new block(420,235,30,40);
  block5 = new block(450,235,30,40);
  block6 = new block(360,195,30,40);
  block7 = new block(390,195,30,40);
  block8 = new block(420,195,30,40);
  block9 = new block(390,155,30,40);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  base1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  drawSprites();
}