
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


function setup() {
  createCanvas(800,400);
 
  engine = Engine.create();
  world = engine.world;

  createSprite(400, 200, 50, 50);
  blowermouth = new blowermouth(450,200,100,40);
  blower = new blower(500,200, 200,200);
  ball = new ball(100,100);
  button = createButton("Click to blow")
  button.position(width/2, height-100);
  button.class("blowbutton");
  button.mousePressed(blow);


}

function draw() {
  background(255,255,255);  
  blowermouth.show();
  blower.show();
  ball.show();
  drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.05});
}