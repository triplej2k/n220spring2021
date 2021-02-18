let positions = [0,0,0,0,0,0,0,0,0,0]
let positionsY = [0,0,0,0,0,0,0,0,0,0]

function setup(){
    createCanvas(800,600)

}

function draw() {
    background("#ff6198")
    positions.push(mouseX);
    positions.shift();
    positionsY.push(mouseY);
    positionsY.shift();

    console.log(positions)
    for(var i = 0; i < positions.length; i++){
        circle(positions[i], positionsY[i], 50)
    }

}