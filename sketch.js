var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
//var particles = [];
var plinkos = [];
var divisions= [];
var particle;
var count=0;
var GameState="start";


var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(40)
  text("Score : "+score,20,30);
  text("200 ",730,550);
  text("200 ",645,550);
  text("200 ",565,550);
  text("100 ",480,550);
  text("100 ",410,550);
  text("100 ",330,550);
  text("500 ",170,550);
  text("500 ",250,550);
  text("500 ",90,550);
  text("500 ",10,550);
  
  
  ground.display();
  Engine.update(engine);
  if(GameState==="end"){
    textSize(100);
    text("GAME OVER" ,150 , 250);
  }
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if (particle!=null){
     particle.display();
     if(particle.body.position.y>750){
       if(particle.body.position.x<300){
         score=score+500;
         particle=null;
         if(count>=5)
         GameState="end";
       }
       else if(particle.body.position.x<600&&particle.body.position.x>301){
         score=score+100;
         particle=null;
         if(count>=5)
         GameState="end";
         
       }
       else if(particle.body.position.x<900&&particle.body.position.x>401){
         score=score+200;
         particle=null;
         if(count>=5)
         GameState="end";
       }
     }
   }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed(){
  if(GameState!=="end"){
    count++;
    particle=new Particle(mouseX,10,10,10)
  }
}