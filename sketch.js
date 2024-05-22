let n = 9999;
let a = new Array(n * 2);
let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB);
  for (let i = 0; i < n; i++) {
    let angle = i * 0.5; 
    let radius = i * 0.1; 
    a[i] = radius * cos(angle); 
    a[i + n] = radius * sin(angle); 
  }
  strokeWeight(0.5);
  frameRate(150);
}

function draw() {

  let centerX = windowWidth / 2;
  let centerY = windowHeight / 2;

  fill(0, 2);
  stroke(t * 99 % 256, 255, 255, 0.2);
  
  for (let i = 0; i < n; i++) {
    let d = dist(a[i], a[i + n], 0, 1);
    a[i] += 1.5 - 3 * noise(a[i] / 99, d / 9, t);
    a[i + n] += 1 - 2 * noise(a[i + n] / 99, d / 9, t);

    let x = a[i] + centerX;
    let y = a[i + n] + centerY;

    point(x, y);
  }
  
  t += 0.01;
}
