//create a canvas
function setup() {
    createCanvas(1500,700)
}

function draw() {
    //add a background color to the canvas
    background("#304050")
    //if the variable "i" is less than the width of the circle + 100, add 150 to the variable "i"
    for (i = 0; i < width + 100; i += 150) {
        //the fill will update the color based on the x position of the mouse
        fill(mouseX - 255, mouseX, -mouseX + 255)
        //draw circles that are spread apart 60 pixels apiece, with a y position the same as the y position of the mouse, and a radius that changes based upon the x position of the mosue
        circle(i+60,mouseY,mouseX / 20)
    }
    //when the mouse button is held down, make the circles move downward on the page
    if (mouseIsPressed) {
        mouseY++
    }
}