let bounceCircle = {
    x: 50,
    y: 50,
    r: 30,
    speedX: 2,
    speedY: 4
}

let recta = {
    x: 100,
    y: 550,
    w: 400,
    h: 50
}

// var circleX = 50;
// var circleY = 50;
// var rectX = 100;
// var rectY = 550;
// var rectW = 400;
// var rectH = 50;
// var speedX = 2;
// var speedY = 4;

function setup() {
    createCanvas(600,600)
    noStroke();
}

function draw() {
    background("#45ae3b")
    cricBounce();
    collideRect(bounceCircle.x, bounceCircle.y, recta.x, recta.y, recta.w, recta.h);
    rect(recta.x, recta.y, recta.w, recta.h,);
}

function cricBounce() {
    circle(bounceCircle.x, bounceCircle.y, 30)
    bounceCircle.x += bounceCircle.speedX;
    bounceCircle.y += bounceCircle.speedY;
    if(bounceCircle.x < 30 || bounceCircle.x > 570) {
        bounceCircle.speedX *= -1
    }
    if(bounceCircle.y < 30 || bounceCircle.y > 570) {
        bounceCircle.speedY *= -1
    }
}

function collideRect() {

    var colliding = false;

    if(bounceCircle.x > recta.x && bounceCircle.x < recta.x + recta.w) {

        if(bounceCircle.y > recta.y && bounceCircle.y < recta.y + recta.h) {
                bounceCircle.speedY *= -1;
              return true;

        }

   }

   return false;

}