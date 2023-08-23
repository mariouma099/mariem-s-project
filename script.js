//js for home.html

function calculateBMI() {
    const height = parseFloat(document.querySelector('input[name="height"]').value);
    const weight = parseFloat(document.querySelector('input[name="weight"]').value);
    
    if (isNaN(height) || isNaN(weight)) {
        alert("Please enter valid values for height and weight.");
        return;
    }
    
    const bmi = weight / ((height / 100) ** 2); 
    alert(`Your BMI is: ${bmi.toFixed(2)}`);
}


document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate-button');
    calculateButton.addEventListener('click', calculateBMI);
});


