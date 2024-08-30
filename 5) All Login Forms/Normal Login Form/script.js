// Function to switch the password field between text and password types
function switchPasswordType() {
  let passInput = document.getElementById("password");
  let passIcon = document.getElementById("passIcon");

  if (passInput.type === "password") {
    // Change input type to text
    passInput.type = "text";
    // Change the icon to eye-slash
    passIcon.classList.remove("bi-eye");
    passIcon.classList.add("bi-eye-slash");
  } else {
    // Change input type to password
    passInput.type = "password";
    // Change the icon to eye
    passIcon.classList.remove("bi-eye-slash");
    passIcon.classList.add("bi-eye");
  }
}
