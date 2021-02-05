function setup(){
    createCanvas(400,300);
}
function draw(){
    background("#da8aff")

    if( mouseX > 200 ){
        fill("#ff4258")
        
    }
    else{
        fill("#4a7dff")
    }
    circle(mouseX,mouseY,50);
    
}