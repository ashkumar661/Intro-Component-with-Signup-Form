// text boxes
const firstName = document.querySelector('.first-name');
const lasttName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

const form = document.querySelector('.signup-container');

// regular expression to validate the email format
const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let firstNameValid = false;
let lastNameValid = false;
let emailValid = false;
let passwordValid = false;

// added submit eventListner on form
// to prevent default form submission
form.addEventListener('submit', (event) => {
    valideInputs();
    validateForm(event);
});

function validateForm(event){
    if(!firstNameValid || !lastNameValid || !emailValid || !passwordValid){
        event.preventDefault();
    }
}

// set the error
// added the input-error class
// and set error-icon visibility
function setError(element, message) {
    element.parentElement.lastElementChild.innerHTML = message;
    element.classList.add("input-error");
    element.parentElement.lastElementChild.style.visibility = "visible";
    element.parentElement.firstElementChild.style.visibility = "visible";
}

// function to remove input-error class
// and set the visibility of error-icon and error-message
function removeError(element){
    element.classList.remove("input-error");
    element.parentElement.lastElementChild.style.visibility = "hidden";
    element.parentElement.firstElementChild.style.visibility = "hidden";
}

// email validation using regex
function validateEmail(){
    return regex.test(String(email.value).toLowerCase());
}

// function to validate all the input elements in the form
function valideInputs() {
    if (firstName.value === "") {
        setError(firstName, "First Name cannot be empty");
    } else {
        removeError(firstName);
        firstNameValid = true;
    }

    if (lasttName.value === "") {
        setError(lasttName, "Last Name cannot be empty");
    } else {
        removeError(lasttName);
        lastNameValid = true;
    }

    if(email.value === ""){
        setError(email,"Email cannot be empty");
    } else if(!validateEmail()){
        setError(email,"Looks like this is not an email");
    } else {
        removeError(email);
        emailValid = true;
    }

    if(password.value === ""){
        setError(password, "Password cannot be empty");
    } else if(password.value.length < 8){
        setError(password, "Password must be at least 8 characters");
    } else {
        removeError(password);
        passwordValid = true;
    }
}