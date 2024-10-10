document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
    const errorModal = document.getElementById("error-modal");
    const closeButton = document.querySelector(".close-button");
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirmPassword");

    form.addEventListener("submit", function(event) {
        const password = passwordField.value;
        const confirmPassword = confirmPasswordField.value;

        // Hide the modal initially
        errorModal.style.display = 'none';

        // Check if passwords match
        if (password !== confirmPassword) {
            errorModal.style.display = 'flex'; // Show modal
            event.preventDefault(); // Prevent form submission
            // Highlight the password fields in red if they don't match
            passwordField.classList.add('invalid');
            confirmPasswordField.classList.add('invalid');
        } else {
            // Reset styles if passwords match
            passwordField.classList.remove('invalid');
            confirmPasswordField.classList.remove('invalid');
        }
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener("click", function() {
        errorModal.style.display = 'none';
    });

    // Real-time validation for password length
    passwordField.addEventListener("input", function() {
        if (passwordField.value.length >= 8) {
            passwordField.classList.add('valid');
            passwordField.classList.remove('invalid');
        } else {
            passwordField.classList.remove('valid');
            passwordField.classList.add('invalid');
        }
    });

    // Real-time validation for confirm password length
    confirmPasswordField.addEventListener("input", function() {
        if (confirmPasswordField.value.length >= 8) {
            confirmPasswordField.classList.add('valid');
            confirmPasswordField.classList.remove('invalid');
        } else {
            confirmPasswordField.classList.remove('valid');
            confirmPasswordField.classList.add('invalid');
        }
    });
});
