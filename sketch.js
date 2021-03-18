var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 200, 30,30);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.15;
	packageBody = Bodies.rectangle(width/2 , 200 , 30, 30 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-10, width,20);
	groundSprite.shapeColor=color("brown")
	ground = Bodies.rectangle(width/2, height-10, width, 20 , {isStatic:true} );
	World.add(world, ground);
	 
	boxBottomSprite=createSprite(width/2, height-30, 200, 20);
 	boxBottomSprite.shapeColor="red";

 	boxBottomBody = Bodies.rectangle(width/2, height-30, 200, 20 , {isStatic:true} );
	World.add(world, boxBottomBody);

	boxleftSprite=createSprite(width/2-100+10, height-40-50, 20,100);
	boxleftSprite.shapeColor="red";

	boxLeftBody = Bodies.rectangle(width/2-100+10, height-40-50, 20,100 , {isStatic:true} );
	World.add(world, boxLeftBody);

 	boxleftSprite=createSprite(width/2+100-10 , height-40-50, 20,100);
 	boxleftSprite.shapeColor="red";

	boxRightBody = Bodies.rectangle(width/2+100-10 , height-40-50, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	Engine.run(engine);
}


function draw() {
  background(0);
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {

    helicopterSprite.x=helicopterSprite.x-10;    
    translation={x:-10,y:0}
    Matter.Body.translate(packageBody, translation)

  } else if (keyCode === RIGHT_ARROW) {

	helicopterSprite.x=helicopterSprite.x+10;
    translation={x:10,y:0}
    Matter.Body.translate(packageBody, translation)

  } else if (keyCode === DOWN_ARROW) {
  
	Matter.Body.setStatic(packageBody,false);
  
  }
}
