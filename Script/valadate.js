/*
Name: John
Date: 10/04/2026
*/


//javascript for the form
function processForm(event) {
    if (!validate()) {
        event.preventDefault()
    }
}

//the validate function
function validate() {

    //clears all the erros after clicking the submit button
    const errors = document.getElementsByClassName("errors");
    for (i = 0; i < errors.length; i++) {
        errors[i].innerHTML = "";
    }

    //validating the Name
    const name_val = document.getElementById('name').value.trim();
    if (name_val === '') {
        document.getElementById("err1").textContent = "*Please enter your name!";
        return false;
    }

    //validating the mobile
    const mobile_val = document.getElementById('mobile').value.trim();
    if (mobile_val === '') {
        document.getElementById("err3").textContent = "*Please enter your mobile number!";
        return false;
    }
    if (validateTel(mobile_val) === false) {
        document.getElementById("err3").textContent = "*your phone number must start with 08 and have 8 digits after";
        return false;
    }


    //validating the Email 1
    const email1_val = document.getElementById('email1').value.trim();
    if (email1_val === '') {
        document.getElementById("err4").textContent = "*Please enter your Email!";
        return false;
    }
    if (validateEmail(email1_val) === false) {
        document.getElementById("err4").textContent = "*This email is not valid";
        return false;
    }

    //validating the Email 2
    const email2_val = document.getElementById('email2').value.trim();
    if (email2_val === '') {
        document.getElementById("err5").textContent = "*Please enter your Email a second time!";
        return false;
    }
    if (validateEmail(email2_val) === false) {
        document.getElementById("err5").textContent = "*This email is not valid";
        return false;
    }

    //checking if both emails are the same
    if (email1_val != email2_val) {
        document.getElementById("err5").textContent = "*The emails are not the same";
        return false;
    }

    //validating radio buttons
    //dont know how

    //validating query
    const query_val = document.getElementById('query').value.trim();
    if (query_val === '') {
        document.getElementById("err8").textContent = "*Please enter your Qurey!";
        return false;
    }


    return true;
}

function validateEmail(emailAddress) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(emailAddress);
}

function validateTel(elementValue) {
    const telephonePattern = /^08\d{8}$/;
    return telephonePattern.test(elementValue);
}

document.getElementById("FromDetails").addEventListener('submit', processForm);