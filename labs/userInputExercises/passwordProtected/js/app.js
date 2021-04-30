let txtUsername = document.getElementById("txtUsername");
let txtPassword = document.getElementById("txtPassword");
let dvLoginResult = document.getElementById("dvLoginResult");

function login() {
  if (username.value == "Username" && password.value == "Password") {
    dvLoginResult.innerHTML = "Success!";
  } else {
    dvLoginResult.innerHTML = "Wrong Information.";
  }
}
