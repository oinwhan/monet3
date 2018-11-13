var x = 232;
var y = 35;
var z = 162;

function setup() {
  createCanvas(640,360);
  background(59,142,255,50);
}

function draw() {
  if (mouseIsPressed) {
    fill(x,y,z,50);
    arc(mouseX, mouseY, mouseX%20+10, mouseX%20+10, random(0,PI), random(0,PI));
  }
  
  if (keyIsPressed === true) {
    x = 210;
    y = 255;
    z = 46;
  } else {
    x = 232;
    y = 35;
    z = 162;
  }
}
