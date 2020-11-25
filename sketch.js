
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var boy;
var groundObject,stoneObject;
var tree;
var sling;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
function preload()
{
	
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   boy= new Boy(100,600,5,10);
   groundObject=new Ground(800,700,1600,20);
  tree=new Tree(550,350,5,250);

  stoneObject=new Stone(40,580,5,5);

     
  mango1=new Mango(550,350,96,240);
  mango2=new Mango(700,350,96,240);
  mango3=new Mango(450,300,96,240);
  mango4=new Mango(650,300,96,240);
  mango5=new Mango(550,250,96,240);
  mango6=new Mango(730,250,96,240);
  mango7=new Mango(490,180,96,240);
  mango8=new Mango(660,180,96,240);
  mango9=new Mango(600,120,96,240);

  
  sling=new Chain(stoneObject.body,{x:100,y:600});

  
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  boy.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
 
  groundObject.display();
  stoneObject.display();
  sling.display();
  
  detectCollision(stoneObject,mango1);
  detectCollision(stoneObject,mango2);
  detectCollision(stoneObject,mango3);
  detectCollision(stoneObject,mango4);
  detectCollision(stoneObject,mango5);
  detectCollision(stoneObject,mango6);
  detectCollision(stoneObject,mango7);
  detectCollision(stoneObject,mango8);
  detectCollision(stoneObject,mango9);

}

function mouseDragged(){
  Matter.Body.setPosition(stoneObject.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(stoneObject.body,{x:140,y:315});
    sling.attacher(stoneObject.body);
  }
}


