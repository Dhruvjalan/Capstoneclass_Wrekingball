const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  crane = createSprite(200,550,10,500);
   

  ground = new Ground();

  building1 = new Building(600,745,300,100);
  building2 = new Building(600,640,300,100);
  building3 = new Building(600,555,300,100);
  building4 = new Building(600,470,300,100);
  ball = new Ball(200,400,100);
  rope = new Rope (ball.body, {x : 200, y : 400} );
}

function draw() {
  background("white");  


  ground.display();
  building1.display();
  building2.display();
  building3.display();
  building4.display();
  ball.display();
  rope.display();

  if(keyDown("space")){
    Matter.Body.setPosition(ball.body, {x:200, y: 400});
    rope.attach(ball.body);
     
  }


  Engine.update(engine);
  console.log(building2.body.position.x, building2.body.position.y)


  

  drawSprites();
}

function mouseDragged(){

     Matter.Body.setPosition( ball.body, {x: mouseX, y: mouseY });
}

function mouseReleased(){

     rope.fly();
}


