const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper;
var dustbinIMG;

function preload()
{
	dustbinIMG = loadImage('dustbin.png');
}

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(300, 330);
	ground = new Ground(600, 350, 1200, 20);
	
	//dustbin1 = new Ground(800, 330, 300, 20);
	//dustbin2 = new Ground(639, 290, 20, 100);
	dustbin3 = new Ground(900, 250, 20, 199);

	var render = Render.create({
		element: document.body, 
		engine: engine, 
		options: { width: 1200, height: 400, showAngleIndicator: true }
		}); 
		Render.run(render);
}


function draw() {
	background('white');
  	Engine.update(engine);
  	paper.display();
  	ground.display();
  	//dustbin1.display();
  	//dustbin2.display();
	dustbin3.display();
	image(dustbinIMG, 800, 250, 300, 200);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:200, y:-130});
	}
}

