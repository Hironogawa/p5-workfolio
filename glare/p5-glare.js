function setup() {
  /*
    Use window-size to get the full size of the window (browser window), also you can reuse the canvas size later as a variable (width, height) from p5.js.
    https://p5js.org/reference/#/p5/windowWidth

    To make the canvas responsive, you need to use the windowResized() function from p5.js.
    That gets called everytime the window is resized, in this function you can resize the canvas with the resizeCanvas() function from p5.js.
  */
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function showMousePosition(show = true) {
  if (show === false) return;
  fill(0);
  let posX = text("X: " + mouseX, 0, 10);
  let posY = text("Y: " + mouseY, 0, 20);
}
function glares(
  count = 24,
  startSize = height / 2,
  startPosX = width / 2,
  startPosY = height / 2
) {
  let posX = startPosX;
  let posY = startPosY;

  // variable initialization must be at least 1 (mulitiplication by 0 results in a infinite loop)
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
}

function draw() {
  background(255); // if you remove the background, you will see the previous frames, can be a cool effect (like a trail).

  showMousePosition(true);
  glares();
}
