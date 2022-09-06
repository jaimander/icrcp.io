let ancho;
let alto;
let f = 0.587;
let x = 0;

function setup() {
  cv = createCanvas(windowHeight * 0.57, 100);
  cv.parent('canvas--p5js');

  ancho = windowWidth * f;
  alto = windowHeight * f;
  resizeCanvas(ancho, alto);

  background(211, 235, 250);
  mouseX = -100;
}

function draw() {
  strokeWeight(3);
  stroke(0);
  noFill();
  rect(0, 0, width, height);
  noStroke();
  colorMode(HSB, 255);
  fill(noise(frameCount * 0.01) * 255, 255, 255, 200);

  push();
  translate(mouseX, mouseY);
  angleMode(DEGREES);
  rotate(frameCount);
  rectMode(CENTER);
  rect(0, 0, 50, 50);
  pop();
}

function windowResized() {
  ancho = windowWidth * f;
  alto = windowHeight * f;
  resizeCanvas(ancho, alto);
}

/*

function draw() {
  background(211, 235, 250);
  //background(40);
  strokeWeight(random(5));
  stroke(random(100));
  let y1 = random(40);
  let y2 = random(height - 40, height);

  let rand = random(10);
  if (rand < 8) {
    line(x, y1, x + random(-10, 10), y2);
  }

  ancho = windowWidth * f;
  alto = windowHeight * f;

  x++;

  if (x > width) {
    x = 0;
  }
}

function windowResized() {
  ancho = windowWidth * f;
  alto = windowHeight * f;
  resizeCanvas(ancho, alto);
}

*/
