// Sign Up Logic For Matching Passwords
// -----------------------------------
const pwd = document.getElementById('pwd');
const cpwd = document.getElementById('cpwd');
const confirmButton = document.getElementById('confirmButton');

function validatePassword(){
    if(pwd.value != cpwd.value) {
        cpwd.setCustomValidity("Passwords Don't Match");
        alert("Passwords Don't Match");
    } else {
        cpwd.setCustomValidity('');
    }
}

confirmButton.addEventListener('click', validatePassword);