let cream = ["#ffabdd", "#fff7d9", "#91664c"]

function setup(){
    createCanvas(300,300);
    noStroke();
}

function draw(){
for (let i = 0; i < cream.length; i++) {
    rect(0,0 + 100 * i, 300, 300);
    fill(cream[i])
}
}