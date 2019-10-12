let n = 0;
let d = 0;
let dSlider;
let auto = true;

// Resume button
let btn = document.createElement("button");
btn.innerHTML = "Pause";
btn.className = "resume__btn";

btn.onclick = function() {
  auto = !auto;

  if (auto) {
    btn.innerHTML = "Pause";
  } else {
    btn.innerHTML = "Continue";
  }
};

function setup() {
  console.log("here2");
  createCanvas().size(350, 350);
  angleMode(DEGREES);
  // dSlider = createSlider(1, 180, 1);

  let cnv = document.getElementById("defaultCanvas0");
  let footer = document.getElementsByClassName("footer")[0];
  cnv.parentNode.insertBefore(btn, cnv.nextSibling);
  btn.parentNode.insertBefore(footer, btn.nextSibling);
}

function draw() {
  background(46);
  translate(width / 2, height / 2);
  stroke(255);
  // d = dSlider.value();
  noFill();
  beginShape();
  for (let i = 0; i < 361; i++) {
    let k = i * d;
    let r = 160 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();

  noFill();
  stroke(176, 0, 0);
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < 361; i++) {
    let k = i;
    let r = 150 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();

  if (auto && d <= 361) {
    n += 0.005;
    d += 0.005;
  }
}
