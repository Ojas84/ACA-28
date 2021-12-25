var score=0;
function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
  edges = createEdgeSprites();
  bunny= createSprite(50,500,20,20)
  bunny.shapeColor = "white"
  carrot = createSprite(500,50,70,50)
  carrot.shapeColor = "red"

  obs1= createSprite(400,200,50,20)
  obs1.shapeColor="yellow"
  

  obs2=createSprite(200,200,50,20)
  obs2.shapeColor="yellow"
  

  obs3= createSprite(500,200,50,20)
  obs3.shapeColor="yellow"
  

  obs4=createSprite(100,200,50,20)
  obs4.shapeColor="yellow"

  obs5=createSprite(300,200,50,20)
  obs5.shapeColor="yellow"
  
  obs6=createSprite(50,300,50,20)
  obs6.shapeColor="yellow"
  
  obs7=createSprite(150,300,50,20)
  obs7.shapeColor="yellow"

  obs8=createSprite(250,300,50,20)
  obs8.shapeColor="yellow"
 
  obs9=createSprite(350,300,50,20)
  obs9.shapeColor="yellow"

  obs10=createSprite(450,300,50,20)
  obs10.shapeColor="yellow"

  obs11=createSprite(550,300,50,20)
  obs11.shapeColor="yellow"

  wormGroup=new Group()
}

function draw() {
  background("black"); 
  bunny.x=mouseX;
  bunny.y=mouseY;
  
  if(keyDown("up")){
    bunny.y=bunny.y-3;
  }
  if(keyDown("down")){
    bunny.y=bunny.y+3;
  }
  if(keyDown("left")){
    bunny.x=bunny.x-3;
  }
  if(keyDown("right")){
    bunny.x=bunny.x+3;
  }

  textSize(20);
  stroke("white")
  if(bunny.isTouching(carrot))
  text("you won",150,100);

  if(bunny.isTouching(obs1)){
    
    text("YOU LOSE",200,200);

    if(bunny.isTouching(carrot))
  text("you won",150,100);
  
  }
  if(bunny.isTouching(obs2)){
    obs2.velocityX=0;
    text("YOU LOSE",150,150);
  }
  if(bunny.isTouching(obs4)){
   
    text("YOU LOSE",150,150);
  }
  if(bunny.isTouching(obs5)){
   
    text("YOU LOSE",150,150);
  }
  if(bunny.isTouching(carrot))
  text("you won",150,100);

  if(bunny.isTouching(obs3)){
    
    text("YOU LOSE",150,150);

    if(bunny.isTouching(carrot))
  text("you won",150,100);
  
  }
  if(bunny.isTouching(obs4)){
    text("YOU LOSE",150,150);
  }
  if(bunny.isTouching(obs6)){
    text("YOU LOSE",150,150);
  }
  
  if(bunny.isTouching(obs7)){
    text("YOU LOSE",150,150);
  }

  if(bunny.isTouching(obs8)){
    text("YOU LOSE",150,150);
  }
  
  if(bunny.isTouching(obs9)){
    text("YOU LOSE",150,150);
  }
  if(bunny.isTouching(obs10)){
    text("YOU LOSE",150,150);
  }
  if(bunny.isTouching(obs11)){
    text("YOU LOSE",150,150);
  }
  
   
  
  generateWorms();
  for(var i=0;i<(wormGroup).length;i++){
  var temp=(wormGroup).get(i);
  if(bunny.isTouching(temp)){
    bunny.x=40;
    bunny.y=40;
    temp.destroy();
    temp=null;
  }
}
  drawSprites()
  
 

}
function generateWorms(){
  if (frameCount % 30===0){
    
    var worm= createSprite(100,350,40,5);
    worm.shapeColor="green"
    worm.velocityX=random(-4,4)
    worm.velocityY=random(-4,4)
    

    wormGroup.add(worm);
  }
}
 
  

