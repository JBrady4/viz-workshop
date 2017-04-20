function setup() {
  createCanvas(1280, 649);
}

function draw() {
  rect(mouseX, mouseY, 80, 80);
  if (mouseIsPressed) {
    fill(0);
  } else {
    stroke(255, 255, 255, 25);
    fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);
  }
}
