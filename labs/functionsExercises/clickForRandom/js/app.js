let colors = ["#f0675d", "#6de2e8", "#8fd46a", "#e3c359"]

function setup() {
    createCanvas(400,400)
    background("#ad82e4")
}

function draw() {
    circle(200,200,150)
    if(mouseIsPressed == true) {
        for(i=0; i< colors.length; i++)
        fill(random(colors))
    }   
}