function setup() {
    createCanvas(400,400)

}

function draw() {
    background("#54ff87");
    for (var i = 0; i < 4; i++) {
        var x = i * 60;
        for(var j = 0; j < 4 - i; j++){
            var y = 339 - j * 60
           square(x,y,60)
           fill("#ff5454")
       }
   }
}
