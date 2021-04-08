const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObject,paper;

function preload()
{
	//dustbinImage = loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//dustbinLeft = new Dustbin(600,640,15,73);
	//World.add(world,dustbinLeft);
	//dustbinLeft.shapeColor = "white";
	dustbinObject = new dustbin(675,669,135,15);
    //dustbinBottomImage = image(this.image, 0, 0, this.r, this.r);
	//World.add(world,dustbinObject);
	//dustbinBottom.shapeColor = "white";
	//dustbinRight = new Dustbin(750,640,15,73);
	//World.add(world,dustbinRight);
	//dustbinRight.shapeColor = "white";

	ground = new Ground(width/2,680,width,10);
	 //World.add(world, ground);
	 //ground.shapeColor = "yellow";

	 paper = new Paper(280,550,20);
	 //paper.velocityY = 3;
	 //paper.collide(ground);
	 //World.add(world, paper);
	 //paper.shapeColor  = "blue";
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  paper.display();
  ground.display();
  dustbinObject.display();
  //bustbinBottom.imageMode(CENTER);
  //dustbinBottomImage = image(this.image, 0, 0, this.r, this.r);
  //dustbinRight.display();
  //dustbinBottom.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:12,y:-15});

	}
}

