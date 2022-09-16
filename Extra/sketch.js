//help: https://www.youtube.com/watch?v=ttz05d8DSOs&ab_channel=TheCodingTrain 
/*
Step 1: Lav retningsvektoren, r , se evt. "Vector-diagram.JPG"
Step 2: Beregn vektorens længde, rlen
Step 3: Normaliser retningsvektoren til en enhedsvektor e=(1/rlen)*r
Step 4: Opdater cirklen til dens nye position 
*/

let circleX; 
let circleY;
let pointX;
let pointY;
let rX;
let rY;
let rlen;
let eX;
let eY; 
let circleSpeed = 2; 
let d = 50;

function setup() { 
  createCanvas(400, 400);
  x = width/2
  y = height/2;
  circleX = mouseX;
  circleY = mouseY;
  pointX = mouseX + random(20,100);
  pointY = mouseY + random(20,100);
  strokeWeight(10);  
} 

function draw() { 
  background(220);
  circle(circleX, circleY, d);
  point(pointX,pointY);
  
  //step 1
  rX = pointX - circleX;
  rY = pointY - circleY;
  
  //step 2
  rlen = sqrt((rX)**2+(rY)**2);

  //step 3
  eX = (1/rlen)*rX
  eY = (1/rlen)*rY

  //step 4 
  circleX += circleSpeed*eX
  circleY += circleSpeed*eY
  
  // update point position
  if(mouseIsPressed){
    pointX=mouseX;
    pointY=mouseY;
  }

  //step 5 incl. boundry check not finished
  /*
  if(circleX>d/2 && circleX<width-d/2){

  } else{
    circleX += circleSpeed*eX
  }

  if(circleY>d/2 && circleY<height-d/2){
    
  } 
  */


}