var gar,ga,tom,jerry;
var gar,tomRunning,TomImg,jer,jerrymo,jerry4

function preload() {
    //load the images here
    gar=loadImage("images/garden.png");
    tomRunning2=loadAnimation("images/tomThree.png","images/tomTwo.png");
    jerrymo=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    tom=loadAnimation("images/tomTwo.png")
    yu=loadAnimation("images/tomFour.png")
    tomImg=loadAnimation("images/tomOne.png")
    jer=loadAnimation("images/jerryOne.png")
    jerry4=loadAnimation("images/jerryFour.png")
    
}

function setup(){
    
    createCanvas(800,800);
    keyPressed()
    ga=createSprite(0,0,800,800)
    ga.addImage(gar)
    tom=createSprite(400,200,12,12);
    tom.scale=0.12
    keyPressed();
    tom.addAnimation("tomstand",tomImg)
    jerry=createSprite(100,200,12,12)
    jerry.scale=0.1
    jerry.addAnimation("jerry",jer)
    
    //create tom and jerry sprites here

}

function draw() {

    background("white");
    if(tom.x-jerry.x < (tom.width-jerry.width)/2){
      tom.velocityX=0
      tom.addAnimation("u",yu) 
      tom.changeAnimation("u")
      tom.scale=0.12
      tom.x=150;
      jerry.addAnimation("rt",jerry4)
      jerry.changeAnimation("rt")
      jerry.x=90
 }
       
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("running",tomRunning2)
    tom.changeAnimation("running")
    jerry.addAnimation("jert",jerrymo)
    jerry.changeAnimation("jert")
    
   
}
  //For moving and changing animation write code here


}
