var canvas;
var gameState = 0;
var form , farmer 
function preload() {

  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
 form = new Form ();
 form.display();
 farmer = new Farmer ();

}

function draw() {
  background("white");
  if (keyDown("space")){
    gameState = 1
  }
  
  if (gameState === 1){
    
    background ("green");
    form.hide();
    farmer.noah.visible = true ;
  //   if(keyDown("up")){
  //     farmer.noah.y = farmer.noah.y-100
  //     console.log("up")
  // }
  // if(keyDown("down")){
  //     farmer.noah.y = farmer.noah.y+5
  // }
  // if(keyDown("left")){
  //     farmer.noah.x = farmer.noah.x-3
  // }
  // if(keyDown("up")){
  //     farmer.noah.x += 3
  // }
  }
  drawSprites ();
}
function keyPressed (){
  if (keyCode ===37){
    farmer.noah.position.x = farmer.noah.position.x-10
    console.log (farmer.noah.position.x)
  }
  if (keyCode ===38){
    farmer.noah.position.y = farmer.noah.position.y-10
    console.log (farmer.noah.position.x)
  }
  if (keyCode ===39){
    farmer.noah.position.x = farmer.noah.position.x+10
    console.log (farmer.noah.position.x)
  }
  if (keyCode ===40){
    farmer.noah.position.y = farmer.noah.position.y+10
    console.log (farmer.noah.position.x)
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
