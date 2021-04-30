let numbers = document.getElementById("numbers");
let sumResults = document.getElementById("sumResults");
let avgResults = document.getElementById("avgResults");

function doCalcs() {
  let numberString = numbers.value;

  let numberArray = numberString.split(",");

  let sum = 0;

  for (let i = 0; i < numberArray.length; i++) {
    sum += Number(numberArray[i]);
    avg = sum / Number(numberArray.length);
  }
  sumResults.innerHTML = sum;
  avgResults.innerHTML = avg;

  numbers.value = "";
}
