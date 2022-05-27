//get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

//validate data

function validateForm(){
    if(nameInput.value.length <1){
        errorNodes[0].innerText = "Name Cannot be blank";
        nameInput.classList.add("error-border");
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid Email Address";
        email.classList.add("error-border");
    }
    if(message.value.length < 1){
        errorNodes[2].innerText = "Please enter Message";
        message.classList.add("error-border");
    }
}

//Clear message
function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText ="";
    }
    successs.innerText= "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.remove("error-border");
}

function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}