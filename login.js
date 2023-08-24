//js for login.html
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginButton = document.getElementById('login-button');
    
    
    loginButton.addEventListener('click', function(event) {
        const usernameOrEmail = document.getElementById('user').value;
        const password = document.getElementById('mdp').value;
        
        if (usernameOrEmail.trim() === '' || password.trim() === '') {
            event.preventDefault();
            alert("Please enter valid data for all fields.");
        } else {
            alert("Account does not exist, please create an account or verify your password");
        }
    });

    const forgotPasswordLink = document.getElementById('forgot-password');
    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert("Please contact reception or visit and provide your ID to reset your password.");
    });
});

