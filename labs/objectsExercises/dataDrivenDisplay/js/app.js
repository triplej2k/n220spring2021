let shape = {
    x: 100,
    y: 200,
    width: 400,
    height: 200,
    color: "#f5d89a"
}

function setup() {
    createCanvas(600,600)
    background("#b2eac1")
}

function draw() {
    fill(shape.color);
    rect(shape.x,shape.y,shape.width,shape.height);
}