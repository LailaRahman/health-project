
      document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("registration-form");
        const passwordInput = document.getElementById("password-input");
        const confirmPasswordInput = document.getElementById(
          "confirm-password-input"
        );
        const modal = document.getElementById("custom-alert");
        const alertTitle = document.getElementById("alert-title");
        const alertMessage = document.getElementById("alert-message");

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

        function showCustomAlert(title, message) {
          alertTitle.textContent = title;
          alertMessage.textContent = message;
          modal.style.display = "flex";
        }

        // Attach closeModal globally
        window.closeModal = function () {
          modal.style.display = "none";
        };
      });