function validateForm() {
  document.querySelectorAll(".error-text").forEach((el) => el.remove());

  let valid = true;

  function showError(id, message) {
    const field = document.getElementById(id);
    const error = document.createElement("p");
    error.className = "error-text";
    error.style.color = "red";
    error.style.fontSize = "13px";
    error.style.margin = "4px 0 0 0";
    error.textContent = message;
    field.insertAdjacentElement("afterend", error);
    valid = false;
  }

  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const address1 = document.getElementById("address1").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value;
  const zip = document.getElementById("zip").value.trim();
  const country = document.getElementById("country").value;
  const email = document.getElementById("email").value.trim();
  const otherAmount = document.getElementById("otherAmount").value.trim();
  const amountRadios = document.querySelectorAll(".radio-amount");


  if (!fname) showError("fname", "First name is required.");
  if (!lname) showError("lname", "Last name is required.");
  if (!address1) showError("address1", "Address is required.");
  if (!city) showError("city", "City is required.");
  if (!state) showError("state", "Please select a state.");
  if (!zip) showError("zip", "Zip code is required.");
  if (!country) showError("country", "Please select a country.");
  if (!email) showError("email", "Email is required.");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailPattern.test(email)) {
    showError("email", "Please enter a valid email address.");
  }

  let amountSelected = false;
  amountRadios.forEach((r) => {
    if (r.checked) amountSelected = true;
  });
  if (!amountSelected && !otherAmount) {
    const donationField = document.querySelector(".donation-amount");
    const error = document.createElement("p");
    error.className = "error-text";
    error.style.color = "red";
    error.style.fontSize = "13px";
    error.textContent = "Please select or enter a donation amount.";
    donationField.appendChild(error);
    valid = false;
  }

  return valid;
}