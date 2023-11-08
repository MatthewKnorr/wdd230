function validatePassword() {
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");
    var passwordMismatch = document.getElementById("passwordMismatch");
  
    if (password.value !== confirmPassword.value) {
      passwordMismatch.style.display = "block";
      password.setCustomValidity("Passwords do not match");
    } else {
      passwordMismatch.style.display = "none";
      password.setCustomValidity("");
    }
  
    document.getElementById("pageRating").addEventListener("input", function() {
      var output = document.querySelector("output[for='pageRating']");
      output.textContent = this.value;
    });
  }