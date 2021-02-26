var circleX = 50;
var circleY = 50;
var rectX = 100;
var rectY = 550;
var rectW = 400;
var rectH = 50;
var speedX = 2;
var speedY = 4;

function setup() {
    createCanvas(600,600)
    noStroke();
}

function draw() {
    background("#45ae3b")
    cricBounce();
    collideRect(circleX, circleY, rectX, rectY, rectW, rectH);
    rect(rectX, rectY, rectW, rectH,);
}

function cricBounce() {
    circle(circleX, circleY, 30)
    circleX += speedX;
    circleY += speedY;
    if(circleX < 30 || circleX > 570) {
        speedX *= -1
    }
    if(circleY < 30 || circleY > 570) {
        speedY *= -1
    }
}

function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

    var colliding = false;

    if(circleX > rectX && circleX < rectX + rectW) {

        if(circleY > rectY && circleY < rectY + rectH) {
                speedY *= -1;
              return true;

        }

   }

   return false;

}