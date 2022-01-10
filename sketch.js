var rocket,rocketImg;
var back,Img;
var astroid,astroidAnim,astroidGroup;
var GameState = "play";
var GameOver,GameOverImg;
function preload(){
   rocketImg = loadImage("rocket.png");
   Img = loadImage("space.png")
   astroidAnim = loadImage("asteroid.jpg")
   GameOverImg = loadImage("Gameover.png")
}

function setup(){
   createCanvas(600,400)
   back = createSprite(200,200);
   back.addImage(Img);
   back.scale = 3
   back.velocityY = 4
   rocket = createSprite(280,300)
   rocket.addImage("launched_Rocket",rocketImg)
   rocket.scale = 0.5
   astroidGroup = new Group()
}

function draw(){
   if(GameState === "play"){
      spawnAstroid()
      if(back.y > 400){
         back.y = height / 2
      }
      if(keyDown("SPACE")){
         rocket.velocityY = -10;
      }
      if(keyDown("RIGHT_ARROW")){
         rocket.x = rocket.x + 2
      }
      if(keyDown("LEFT_ARROW")){
         rocket.x = rocket.x - 2
      }
      rocket.velocityY = rocket.velocityY + 0.8;
      
   
      if(astroidGroup.isTouching(rocket) || rocket.y > 400){
         GameState = "end"
      }
      
}  else if(GameState === "end"){
            rocket.velocityY = 0
            astroidGroup.velocityY = 0
            back.velocityY = 0
            GameOver = createSprite(300,200)
            GameOver.addImage(GameOverImg)
            GameOver.scale = 0.5
         }

   drawSprites()
   
}

function spawnAstroid(){
   if (World.frameCount % 200 == 0) {
      astroid = createSprite(Math.round(random(50, 600),40, 10, 10));
      astroid.addImage(astroidAnim);
      astroid.scale=0.12;
      astroid.velocityY = 3;
      astroid.lifetime = 150;
      astroidGroup.add(astroid)
   }
   
}

