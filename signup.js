document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('.createaccount-form');
    const signupButton = document.getElementById('signup');
    
    signupButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        const name = document.getElementById('namep').value;
        const email = document.getElementById('ajmail').value;
        
        if (name.trim() === '' || email.trim() === '') {
            alert("Please enter valid data for all fields.");
        } else {
            alert("Account created successfully! We will call you soon to provide information and communicate details about offers.");
           
        }
    });
});
