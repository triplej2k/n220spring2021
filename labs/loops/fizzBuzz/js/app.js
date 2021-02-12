
function setup(){
    createCanvas(2000,2000)
}
let y = 200

function draw(){
    for (var x = 0; x < 25; x++ ){
        if(x % 3 == 0 && x % 5 == 0){
            fill("#4a74ff")
            square(x*55,y,30)
        }
        else if(x % 3 == 0){
            fill("#d400ff")
            circle(x*55,y,20)
        }
        else if(x % 5 == 0){
            fill("#00ff66")
            circle(x*55,y,20)
        }

        else{
            fill("#000000")
            circle(x*55,y,20)
        }
    }


}
