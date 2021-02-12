function setup() {
    createCanvas(500,500)
}


function draw() {
    background(115,115,115)

    for( var r = 50; r > 0; r--) {
        circle(250,250,r*5);
    
    }
}