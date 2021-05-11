const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  world;



function preload()
{
	IMG=loadImage("i.jpg")

}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
   world=engine.world

   ground=new Ground (0,420,1200,20)
  
   box1=new Box(400,400,40,30)
   box23=new Box(450,400,40,30)
   box2=new Box(400,360,40,30)
   box3=new Box(400,320,40,30)
   box4=new Box(400,280,40,30)
   box5=new Box(400,240,40,30)
   box6=new Box(400,200,40,30)
   box9=new Box(400,160,40,30)
   box7=new Box(400,120,40,30)
   box8=new Box(400,80,40,30)
   box10=new Box(450,80,40,30)
   box11=new Box(450,360,40,30)
   box12=new Box(450,320,40,30)
   box13=new Box(450,280,40,30)
   box14=new Box(450,200,40,30)
   box15=new Box(450,120,40,30)
   box16=new Box(450,240,40,30)
   box17=new Box(450,160,40,30)
   box18=new Box(500,400,40,30)
 
   box19=new Box(500,360,40,30)
   box20=new Box(500,320,40,30)
   box21=new Box(500,280,40,30)
   box22=new Box(500,240,40,30)
   poly=new Polygon(250,180,40,40)
}

function draw() {
  background(IMG);
  Engine.update(engine)
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  poly.display()
  drawSprites();
}


