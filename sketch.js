const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	ground=new Ground(350,100,600,50)
	ball1=new Ball(50,500,100,100)
	rope1=new Rope(ball1.body,{x:50,y:100})

	ball2=new Ball(250,500,100,100)
	rope2=new Rope(ball2.body,{x:250,y:100})

	ball3=new Ball(450,500,100,100)
	rope3=new Rope(ball3.body,{x:450,y:100})

	ball4=new Ball(650,500,100,100)
	rope4=new Rope(ball4.body,{x:650,y:100})
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  
 	ground.display()
	ball1.display()
	rope1.display()
	ball2.display()
	rope2.display()
	ball3.display()
	rope3.display()
	ball4.display()
	rope4.display()


  drawSprites();
 
}



