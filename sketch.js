const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject;

function preload() {}

function setup() {
  createCanvas(800, 500);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  bobObject1 = new Bob(400, 250);
  bobObject2 = new Bob(420, 250);
  bobObject3 = new Bob(440, 250);
  bobObject4 = new Bob(460, 250);
  bobObject5 = new Bob(480, 250);

  roofObject = new Roof(400,);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("gray");

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
}
