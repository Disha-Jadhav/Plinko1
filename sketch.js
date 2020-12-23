const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;

var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];

var score = 0;

function setup() 
{
  createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
    
  ground1 = new ground(240, 790, 480, 20);

  for (var k = 0; k <= width; k = k + 80) 
  {
    divisions.push(new division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 75; j <= width; j = j + 60) 
  {
    plinkos.push(new plinko(j, 75));
  }
  for (var j = 50; j <= width - 20; j = j + 50) 
  {
    plinkos.push(new plinko(j, 175));
  }
  for (var j = 75; j <= width; j = j + 60) 
  {
    plinkos.push(new plinko(j, 275));
  }
  for (var j = 50; j <= width - 20; j = j + 50) 
  {
    plinkos.push(new plinko(j, 375));
  }              
}

function draw() 
{
  background(0);
  Engine.update(engine);

  ground1.display();

  for (var h = 0; h < plinkos.length; h++) 
  {
    plinkos[h].display();
  }

  if(frameCount % 60 === 0)
  {
    particles.push(new particle(random(width/2 - 30, width/2 + 30), 10, 10));
  }
  for (var j = 0; j < particles.length; j++) 
  {
    particles[j].display();
  }
  
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }

  drawSprites();
};