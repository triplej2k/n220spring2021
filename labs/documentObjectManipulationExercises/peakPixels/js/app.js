let dvSquare = document.getElementById("dvSquare");

dvSquare.style.backgroundColor = "#00b81c";
dvSquare.style.height = "100px";
dvSquare.style.width = "100px";

let hSquare = 100;
let wSquare = 100;

function getBigger() {
    hSquare = hSquare * 1.1;
    wSquare = wSquare * 1.1;
    dvSquare.style.height = hSquare + "px"
    dvSquare.style.width = wSquare + "px"
}