let n = 0;
let d = 0;
let dSlider;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  dSlider = createSlider(1, 180, 1);
}

function draw() {
  background(0);
  translate(width/2, height/2);
  stroke(255);
  // d = dSlider.value();
  noFill();
  beginShape();
  for (let i = 0; i < 361; i++) {
    let k = i * d;
    let r = 150 * sin(n*k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();

  noFill();
  stroke(0, 0, 255);
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < 361; i++) {
    let k = i;
    let r = 150 * sin(n*k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();

  n += .01;
  d += .01;
}
