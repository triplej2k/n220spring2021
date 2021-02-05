function setup(){
    var x = 250
    var y = 100
    createCanvas(800,800);
    background("#5cd633")
    noStroke()
    fill("#51cddb")
    rect(0,0,800,400)
    fill("255,255,255")
    stroke(5)
    strokeWeight(2)
    fill("#6e5834")
    rect(y,200, 500 , 350)
    fill("#b8b6b8")
    triangle(337.5,50,600,200,y,200)
    fill("#e3e3e3")
    rect(150,x,y,y)
    rect(450,x,y,y)
    rect(290,320,110,230)
    line(200,x,200,350)
    line(150,300,x,300)
    line(500,x,500,350)
    line(450,300,550,300)
    strokeWeight(1)
    fill(255,255,255)
    circle(390,430,5)

}