document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const passwordInput = document.getElementById("password-input");
  const confirmPasswordInput = document.getElementById(
    "confirm-password-input"
  );
  const modal = document.getElementById("custom-alert");
  const alertTitle = document.getElementById("alert-title");
  const alertMessage = document.getElementById("alert-message");
  const genderInputs = document.querySelectorAll("#gender input[type='radio']");
  let selectedGender = null;

  // Track gender selection
  genderInputs.forEach((input) => {
    input.addEventListener("change", (event) => {
      selectedGender = event.target.value; // Update the selected gender
      console.log("Selected Gender:", selectedGender); // Log the selected gender
    });
  });

  // Form submission handler
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page refresh
    let isValid = true;

    // Check if passwords match
    if (passwordInput.value !== confirmPasswordInput.value) {
      showCustomAlert("Error", "Passwords do not match!");
      return;
    }

    // Check if all required fields are filled
    const requiredFields = form.querySelectorAll("input[required]");
    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        isValid = false;
      }
    });

    // Check if gender is selected
    if (!selectedGender) {
      isValid = false;
      showCustomAlert("Error", "Please select your gender!");
      return;
    }

    if (!isValid) {
      showCustomAlert(
        "Error",
        "Your form is incomplete. Please fill out all required fields."
      );
    } else {
      showCustomAlert(
        "Success",
        "You have successfully submitted your form!"
      );
    }
  });

  // Custom alert function
  function showCustomAlert(title, message) {
    alertTitle.textContent = title;
    alertMessage.textContent = message;
    modal.style.display = "flex";
  }

  // Close modal function
  window.closeModal = function () {
    modal.style.display = "none";
  };
});
