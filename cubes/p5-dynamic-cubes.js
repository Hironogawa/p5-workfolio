/* 
  If we want to use multiple canvases, we need new instances of p5.
  We can create a new instance of p5 by passing a function and a target element to the p5 constructor.

  This is also usful to use it with other libraries and frameworkss.
 */

let cubeCount = 12;
for (let i = 0; i < cubeCount; i++) {
  let c1 = function (p5) {
    // p5 can be named anything you want, it's just a variable name to hold the p5 instance.
    let cubeInner = p5.windowWidth / (12 * 4);
    let canvasSize = p5.windowWidth / (12 * 2);
    function showMousePosition(show = true) {
      if (show === false) return;
      p5.fill(0);
      let posX = p5.text("X: " + p5.mouseX, 0, 10);
      let posY = p5.text("Y: " + p5.mouseY, 0, 20);
    }
    function dynamicCubes(cubeSize = 100) {
      p5.background(0);
      p5.fill(255 - p5.mouseX / 8, 100, 200);
      p5.rect(cubeSize, cubeSize, p5.mouseX + 1, p5.mouseX + 1);
    }
    p5.setup = function () {
      p5.createCanvas(canvasSize, canvasSize);
      p5.frameRate(30);
      p5.colorMode(p5.HSB, p5.windowWidth, 100, 100);
      p5.rectMode(p5.CENTER);
      p5.noStroke();
    };
    p5.windowResized = function () {
      cubeInner = p5.windowWidth / (12 * 2);
      canvasSize = p5.windowWidth / (12 * 2);
      p5.resizeCanvas(canvasSize, canvasSize);
    };
    p5.draw = function () {
      showMousePosition(true);
      dynamicCubes(cubeInner);
    };
  };
  let canvas1 = new p5(c1, "c1");
}
