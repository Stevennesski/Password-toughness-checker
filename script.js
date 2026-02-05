const paswordInput =
document.getElementById("password");
const result = document.getElementById("result");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;

  lf (password.length <6) {
    result.textContent = "Strength: Weak";
  } else if ("password.length < 10 ) {
    result.textContent = "Stength: Medium";
  } else {
    result.textContent = "Strength: Strong";
  }
});
