const paswordInput =
document.getElementById("password");
const result = document.getElementById("result");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;

  lf (password.length <9) {
    result.textContent = "Strength: Weak";
  } else if ("password.length < 13 ) {
    result.textContent = "Stength: Medium";
  } else {
    result.textContent = "Strength: Strong";
  }
});
