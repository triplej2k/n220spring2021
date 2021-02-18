let drip = [1, 600]
let y = 0
function setup(){
    createCanvas(600,600);
    
}

function draw() {
    
    for(var i = 0; i< drip.length; i++){
        if(y < drip[i]){
            background("#76e8cd")
            fill("#40c9ff")
            y = y + 5
            circle(295, y, 15)
        }
        if(y == 600){
            fill("#40c9ff")
            circle(295, y, 15)
             y = y - 600

        }
        
        
    
    }
    }
  