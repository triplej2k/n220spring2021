let total = document.getElementById("total");

function calcTip() {
  let price = Number(total.value);
  let tipAmount = price * 0.15;
  let totalPrice = price + tipAmount;

  console.log("Tip: $", tipAmount, "Total: $", totalPrice);
}
