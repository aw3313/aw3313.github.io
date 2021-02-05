let d;// using float for direction because it might not be whole numbers

let x1;//the x1 coordinate
let y1;//the y1 coordinate
let x1Dir;//the x1 coordinates direction
let y1Dir;//the y1 coordinates direction
let x1Sp;//the x1 coordinates speed
let y1Sp;//the y1 coordinates speed
let x2;//the x2 coordinate
let y2;//the y2 coordinate
let x2Dir;//the x2 coordinates direction
let y2Dir;//the y2 coordinates direction
let x2Sp;//the x2 coordinates speed
let y2Sp;//the y2 coordinates speed
let canvasWidth = 500;
let canvasHeight = 500;

function setup ()
{
  createCanvas(canvasWidth,canvasHeight);
  background(252, 59, 48);//the color background is red
  x1=width/2;
  y1=height/2;
  x1Dir=1;//the x1 coordinates direction is 1
  y1Dir=1;//the y1 coordinates direction is 1
  x1Sp=4;// the x1 coordinates speed is 4
  y1Sp=1;// the y1 coordinates speed is 1
  fill(48, 142, 252);
  ellipse(x1,y1,50,50);

  x2=width/2;
  y2=height/2;
  x2Dir=4;//x2 coordinate direction is 4
  y2Dir=1;//y2 coordinate direction is 1
  x2Sp=4;//x2 coordinate speed is 4
  y2Sp=1;//y2 coordinate speed is 1
  fill(189, 129, 206);//color for this ellipse
  ellipse(x2,y2,50,50);//the circle for x2 and y2
}

function draw()
{

 background(252, 59, 48);//background color for the window
  if (x1>width)//if x1 is less than width
  {
    x1Dir=-1;//then x1 direction is negative
  }
  else if (x1<0)//if x1 is less than zero
  {
    x1Dir=1;//then x1 direction is positive
  }
  x1=x1+x1Dir*x1Sp;
  y1=y1+y1Dir*y1Sp;
  fill(48, 142, 252);//color for this ellipse
  ellipse(x1,y1,50,50);//the ellipse for x1 and y1

  if(y1>height)//if y1 is greater than height
  {
    y1Dir=-1;//then y1 direction is negative
  }
  else if (y1<0)//if y1 is less than zero
  {
    y1Dir=1;//then y1 direction is postive
  }
  x1=x1+x1Dir*x1Sp;
  y1=y1+y1Dir*y1Sp;
  fill(48, 142, 252);//color for this ellipse
  ellipse(x1,y1,50,50);//ellipse for x1 and y1



  if (x2>width)//if x2 is greater than width
  {
    x2Dir=-1;//then x2 direction is negative
  }
  else if (x2<0)//if x2 is less than zero
  {
    x2Dir=1;//then x2 direction is postive
  }
  x2=x2+x2Dir*x2Sp;
  y2=y2+y2Dir*y2Sp;
  fill(189, 129, 206);//color for the ellipse
  ellipse(x2,y2,50,50);//ellispe for x2 and y2

  if (y2>height)//if y2 is greater than height
  {
    y2Dir=-1;//then y2 direction is negative
  }
  else if (y2<0)//if y2 is less than zero
  {
    y2Dir=1;//if y2 directino is postive
  }
  x2=x2+x2Dir*x2Sp;
  y2=y2+y2Dir*y2Sp;
  fill(189, 129, 206);//color for the ellipse
  ellipse(x2,y2,50,50);//the ellipse for x2 and y2
   d = sqrt( (x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
 print(d);
 if (d<100)
 {
   fill(184, 227, 92);//color of rectangle
   rect(width/2,height/2,30,30);//the rectangle will appear
 }
}
