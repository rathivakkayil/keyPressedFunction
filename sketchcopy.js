function setup() {
  createCanvas(600, 200);
  textSize(20);
  text("Press any key to check if "
        + "it is being pressed or "
        + "released", 10, 20);
}
   
function keyPressed() {
  clear();
  textSize(20);
  text("Press any key to check if "
        + "it is being pressed or "
        + "released", 10, 20);
  textSize(30);
    
  text("You are pressing: " 
        + Key, 20, 100);
}
   
function keyReleased() {
  clear();
  textSize(20);
  text("Press any key to check if "
        + "it is being pressed or "
        + "released", 10, 20);
  textSize(30);
    
  text("You released: "
        + Key, 20, 100);
}