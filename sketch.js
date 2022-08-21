var BG,bgImage
var mario,marioImage
var cloud,cloudImage
var cloudsGroup,cloudImage
var building, buildingGroup,buildingImage
var invisableGround
function preload(){
bgImage = loadImage("mario 2.0/ground.jpeg")
marioImage = loadImage("mario 2.0/mario runner.gif")
cloudImage = loadImage("mario 2.0/cloud.png");
building1Image = loadImage("mario 2.0/building1.png")
building2Image = loadImage("mario 2.0/building 2.png")
}

function setup() {
 createCanvas(windowWidth,windowHeight)
 BG = createSprite(width/2,height/3,width,height)
 BG.addImage(bgImage)
 BG.scale = 4
 invisableGround = createSprite(250,height-150,2000,50)
 invisableGround.visible = false
mario = createSprite(250,height-200)
mario.addImage(marioImage)
mario.scale = 1
mario.debug = true
mario.setCollider("rectangle",0,0,75,150)
cloudsGroup = new Group()
buildingsGroup = new Group()
}

function draw() {
 background("red")
 BG.velocityX = -6
 if(BG.x<width/3){
   
   BG.x = width/2
 }
 if(keyDown("space")&&mario.y>height/2){
   mario.velocityY  = -12

 }
 if(keyDown("right")&&mario.x<width/2){
   mario.x  += 5
 }
 mario.velocityY += 0.5
 mario.collide(invisableGround)
 mario.collide(buildingsGroup)
 spawnClouds()
 spawnBuildings()
 drawSprites()
 
}
function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 60 === 0) {
      var cloud = createSprite(width,100,40,10);
      cloud.y = Math.round(random(80,200));
      cloud.addImage(cloudImage);
      cloud.scale = random(0,2);
      cloud.velocityX = -3;
      
       //assign lifetime to the variable
      cloud.lifetime = width;
      
      //adjust the depth
      
      
      //add each cloud to the group
      cloudsGroup.add(cloud);
    }
}
function spawnBuildings() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    var building = createSprite(width+100,height-200,40,10);
    var r = Math.round(random(1,2))
    if(r === 1){

    
    building.addImage(building1Image);
    
    }
    else{
      building.addImage(building2Image)
    }
    building.scale = random(0.5,0.8);
    building.velocityX = -3;
    
     //assign lifetime to the variable
    building.lifetime = width;
    
    //adjust the depth
    
    
    //add each cloud to the group
    buildingsGroup.add(building);
  }
}