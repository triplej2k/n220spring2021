let theCircle = {
    x: 67,
    y: 123,
    r: 62
}


function setup() {
    createCanvas(600,600)
    background("#e341bb")
}

function draw() {
    background("#e341bb")
    fill("#b5f1a7")
    circle(theCircle.x,theCircle.y,theCircle.r);
    theCircle.x ++;
}