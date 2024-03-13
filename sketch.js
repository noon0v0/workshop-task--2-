let counter = 0;

let countInterval = setInterval(makeRedSquare, 400);

function setup(){
  createCanvas(500, 500);
  background(150, 220, 220);
}

function makeRedSquare(){
  stroke(255, 255, 100);
  fill(255, 255, 90);
  line(random(100,400), random(100,400), 250, 250);
  counter++;
  if (counter > 6){
    clearInterval(countInterval);
    counter = 0;
  }
}

function mousePressed() {
  countInterval = setInterval(makeRedSquare, 300)
}