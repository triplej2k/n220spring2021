let colors = ["#de6159", "#debf59", "#597fde", "#cc59de", "#de59af"] //array to set random colors
let rectX = [0, 304, 608, 912, 1216] //array to set the x coordinate for rectangles

function setup() {
    createCanvas(1520,702) //creates canvas
    noStroke();  //deletes strokes from rectangles
    drawRect(colors.length, 304, 702, 0);  //calls the drawRect function, includes arguements to set fill, x coordinate, width, height, and y coordinate
}

function drawRect(rectCol, rectW, rectH, rectY){ //calls arguments from the setup function
       for(var i = 0; i <= rectCol; i++){  //when i is less than the number of colors in the array, count up by 1
        fill(random(colors))  //fills the rectangles with random array values, when refreshing the page (interactive?), re-randomizes colors
        rect(rectX[i], rectY, rectW, rectH)  //draws a rectangle with increasing x coordinates via the rectX array, working with the for loop, y coordinate, width, and height come from the arguments in the setup function
       }
    }