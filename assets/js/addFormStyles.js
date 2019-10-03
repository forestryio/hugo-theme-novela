document.getElementById("submitButton").addEventListener("click", addErrorStyles);
document.getElementById("emailInput").addEventListener("keyup", updateStyles);

subscriptionForm = document.getElementById("subscriptionForm");
emailField = document.getElementById("emailInput");
submitted = false;

function addErrorStyles(){
    submitted = true;
    updateClasses();
}

function updateStyles(){
    if (submitted === true){
        updateClasses();
    }
}

function updateClasses(){
    if(emailField.validity.valid){
        subscriptionForm.classList.remove("submitted-form");
    }
    else{
        subscriptionForm.classList.add("submitted-form");
        emailField.classList.add("submitted-input");
    }
}