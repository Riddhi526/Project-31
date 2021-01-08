const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;

var ground1;
var div1,div2,div3,div4,div5,div6,div7;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
function setup() {
  createCanvas(540,550);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  ground1 = new Ground(240,547,610,10);
  div1 = new Division(5,510,5,300);
  div2 = new Division(95,510,5,300);
  div3 = new Division(185,510,5,300);
  div4 = new Division(275,510,5,300);
  div5 = new Division(365,510,5,300);
  div6 = new Division(450,510,5,300);
  div7 = new Division(537,510,5,300);
  for (var j = 30; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75,10));
     }
  for (var a = 15; a<=width; a=a+50){
    plinkos.push(new Plinko(a,175,10));
  }
  for (var b = 30; b<=width; b=b+50){
    plinkos.push(new Plinko(b,275,10));
  }
  
  
  
  Engine.run(engine);
}

function draw() {
  background(0);  
  ground1.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();
  for (var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }
  for (var k = 0; k < plinkos.length; k++){
    plinkos[k].display();
  }
  for (var l = 0; k < plinkos.length; l++){
    plinkos[l].display();
  }
  if (frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    
  }
  for (var m = 0; m < particles.length; m++){
    particles[m].display();
  }
  
 drawSprites();
}
 
  
  
 