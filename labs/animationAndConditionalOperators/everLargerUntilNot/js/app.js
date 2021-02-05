
let boom = 0
function setup(){
    createCanvas(600,600)
    background("#1b5ab3")
}

function draw(){
    boom = boom + 1
    fill("#ffd66e")
    circle(300,300, boom + 1);

    if(boom >= 200){
        background("#1b5ab3")
        boom = 0
    }
  

}