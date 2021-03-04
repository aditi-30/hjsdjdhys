const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball_img
var ball
var g1,g2
var slingshot
var b1,b2,b3,b4,b5
var b6,b7,b8,b9
var b10,b11,b12
var b13,b14
var b15
var b16,b17,b18,b19,b20
var b21,b22,b23,b24
var b25,b26,b27
var b28,b29
var b30


function preload() {
}

function setup(){
    
    var canvas = createCanvas(1200,500);
    engine=Engine.create()
    world=engine.world;
    ball= new Ball()
   // slingshot=new SlingShot(ball.body,{x:100,y:200})
     g1=new Ground(400,300,250,10)
     g2=new Ground(1000,350,250,10)
     b1=new Block(320,270)
     b2=new Block(360,270)
     b3=new Block(400,270)
     b4=new Block(440,270)
     b5=new Block(480,270)
     b6=new Block(340,220)
     b7=new Block(380,220)
     b8=new Block(420,220)
     b9=new Block(460,220)
     b10=new Block(360,170)
     b11=new Block(400,170)
     b12=new Block(440,170)
     b13=new Block(380,120)
     b14=new Block(420,120)
     b15=new Block(400,70)
     b16=new Block(920,320)
     b17=new Block(960,320)
     b18=new Block(1000,320)
     b19=new Block(1040,320)
     b20=new Block(1080,320)
     b21=new Block(940,270)
     b22=new Block(980,270)
     b23=new Block(1020,270)
     b24=new Block(1060,270)
     b25=new Block(960,220)
     b26=new Block(1000,220)
     b27=new Block(1040,220)
     b28=new Block(980,170)
     b29=new Block(1020,170)
     b30=new Block(1000,120)
     Engine.update(engine);

     
}

function draw(){
    background("lavender")
    // detectCollision(ball,b1)
    // detectCollision(ball,b2)
    // detectCollision(ball,b3)
    // detectCollision(ball,b4)
    // detectCollision(ball,b5)
    // detectCollision(ball,b6)
    // detectCollision(ball,b7)
    // detectCollision(ball,b8)
    // detectCollision(ball,b9)
    // detectCollision(ball,b10)
    // detectCollision(ball,b11)
    // detectCollision(ball,b12)
    // detectCollision(ball,b13)
    // detectCollision(ball,b14)
    // detectCollision(ball,b15)
    // detectCollision(ball,b16)
    // detectCollision(ball,b17)
    // detectCollision(ball,b18)
    // detectCollision(ball,b19)
    // detectCollision(ball,b20)
    // detectCollision(ball,b21)
    // detectCollision(ball,b22)
    // detectCollision(ball,b23)
    // detectCollision(ball,b24)
    // detectCollision(ball,b25)
    // detectCollision(ball,b26)
    // detectCollision(ball,b27)
    // detectCollision(ball,b28)
    // detectCollision(ball,b29)
    // detectCollision(ball,b30)

    fill("magenta")
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    fill("blue")
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b21.display();
    b22.display();
    b23.display();
    b24.display();
    fill("lightgreen")
    b10.display();
    b11.display();
    b12.display();
    b25.display();
    b26.display();
    b27.display();
    fill("red")
    b13.display();
    b14.display();
    b28.display();
    b29.display();
    fill("purple")
    b15.display();
    b30.display();
    fill("magenta")
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    g1.display();
    g2.display();
    ball.display();
   // slingshot.display();
    
    
    drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


// function mouseReleased(){
//     slingshot.fly();
// }

function detectCollision(balls,Blocks){
	ballBodyPosition=balls.body.position
	blockBodyPosition=Blocks.body.position
	var distance = dist(ballBodyPosition.x,ballBodyPosition.y,blockBodyPosition.x,blockBodyPosition.y)
	if(distance<=Blocks.r+balls.r){
	Matter.Body.setStatic(Blocks.body,false)
	}
	}