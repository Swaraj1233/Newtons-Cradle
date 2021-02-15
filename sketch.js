const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
    ball1 = new ball(50,200,100);
    ground1 = new ground(650,550,1300,20);
   
    box1 = new box(900,100,70,70);
    box2 = new box(900,100,70,70);
    box3 = new box(900,100,70,70);
    box4 = new box(900,100,70,70);
    box5 = new box(900,100,70,70);
    box6 = new box(900,100,70,70);
    box7 = new box(900,100,70,70);
    box8 = new box(800,100,70,70);
    box9 = new box(800,100,70,70);
    box10 = new box(800,100,70,70);
    box11 = new box(800,100,70,70);
    box12 = new box(800,100,70,70);
    box13 = new box(800,100,70,70);
    box14 = new box(800,100,70,70);
    box15 = new box(700,100,70,70);
    box16 = new box(700,100,70,70);
    box17 = new box(700,100,70,70);
    box18 = new box(700,100,70,70);
    box19 = new box(700,100,70,70);
    box20 = new box(700,100,70,70);
    box21 = new box(700,100,70,70);
    


    chain1 = new chain(ball1.body,{x:500,y:50});
    
	Engine.run(engine);

}

function draw() {
    background(230);
    Engine.update(engine);







ball1.display();
ground1.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
chain1.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();

}
function mouseDragged(){
    
    
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
  
  }


