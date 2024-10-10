document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
    const errorModal = document.getElementById("error-modal");
    const closeButton = document.querySelector(".close-button");
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirmPassword");

    form.addEventListener("submit", function(event) {
        const password = passwordField.value;
        const confirmPassword = confirmPasswordField.value;

       
        errorModal.style.display = 'none';

       
        if (password !== confirmPassword) {
            errorModal.style.display = 'flex'; 
            event.preventDefault(); 
            passwordField.classList.add('invalid');
            confirmPasswordField.classList.add('invalid');
        } else {
            
            passwordField.classList.remove('invalid');
            confirmPasswordField.classList.remove('invalid');
        }
    });

    
    closeButton.addEventListener("click", function() {
        errorModal.style.display = 'none';
    });

    
    passwordField.addEventListener("input", function() {
        if (passwordField.value.length >= 8) {
            passwordField.classList.add('valid');
            passwordField.classList.remove('invalid');
        } else {
            passwordField.classList.remove('valid');
            passwordField.classList.add('invalid');
        }
    });

    
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
