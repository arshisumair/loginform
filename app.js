function validateForm() {
  const email = document.getElementById("email").value;
  const storedEmail = localStorage.getItem("userEmail");
  const emailError = document.getElementById("emailError");
if (storedEmail && storedEmail === email) {
      emailError.textContent = "This email has already been used. Please use a different email.";
      return false; 
  }

localStorage.setItem("userEmail", email);
  return true; 
}