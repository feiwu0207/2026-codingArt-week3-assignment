let sizeW, sizeH, numShapes; 

function setup() {

  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);

  numShapes = 20; 

  sizeW = width / numShapes; 
  sizeH = height / numShapes; 

  x = width / 2; 
  y = height / 2; 
}

function draw() {

  background(0);

  for (i = numShapes; i > 0; i--)
  {
    //print(i);

    noFill();

    stroke('pink');

    strokeWeight(3);

    triangle(
      x, y - sizeH * i / 2,
      x - sizeW * i / 2, y + sizeH * i / 2,
      x + sizeW * i / 2, y + sizeH * i / 2
    );
  }

  sizeW++;
  sizeH++;

  if (sizeW > width) {
    sizeW = 0;
    sizeH = 0;
  }

  if (sizeH > height) {
    sizeH = 0;
    sizeW = 0;
  } 

}