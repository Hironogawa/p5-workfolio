function setup() {
  createCanvas(windowWidth, windowHeight);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  background(255);
  frameRate(30);

  fill(0);
  text("X: " + mouseX, 0, 10);
  text("Y: " + mouseY, 0, 20);

  //   fill(50);

  // variable initialization must be at least 1 (mulitiplication by 0)
  let startPosX = width / 2;
  let startPosY = height / 2;

  let posX = startPosX;
  let posY = startPosY;

  let count = 24;
  let startSize = height / 2;

  for (let i = 1; i < count; i *= 2) {
    posX = startPosX + (startPosX - mouseX) * i;
    posY = startPosY + (startPosY - mouseY) * i;
    fill(255, 0, 0, 100 / i);
    noStroke();

    ellipse(
      posX,
      posY,
      startSize + (startSize / count) * i,
      startSize + (startSize / count) * i
    );
  }

  //   let centerMouseX = mouseX;
  //   let centerMouseY = mouseY;

  //   posX = centerMouseX;
  //   posY = centerMouseY;

  //   if (mouseX > startPosX) {
  //     posX = startPosX + (startPosX - mouseX);
  //   } else {
  //     posX = startPosY - (startPosY - mouseX);
  //   }

  //   for (let i = 1; i < 12; i *= 2) {
  //     ellipse(posX + mouseX / i, posY + mouseY / i, 50, 50);
  //   }
}
