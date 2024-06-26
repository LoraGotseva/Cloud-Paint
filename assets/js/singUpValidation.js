const registerBtn = document.getElementById('btn-sign-up');

function validateUsername(value){
    const regex = /^[a-zA-Z0-9$_]+$/;
    if(value === ''){
        document.querySelector('#username_error').innerHTML = "Please fill the field!";
        return false;
    }
    if(value.length < 3 ){
        document.querySelector('#username_error').innerHTML = "Username must be at least 3 characters";
        return false;
    }
    if(value.length > 15 ){
        document.querySelector('#username_error').innerHTML = "Username must be maximum 15 characters";
        return false;
    }


    if(!regex.test(value)){
        document.querySelector('#username_error').innerHTML = "Username can consist only 'a-z', 'A-Z', '_', '$', '0-9'!"
        return false;
    }
    
    
    return true;
}
function validatePassword(value){
    document.querySelector('#repPassoword_error').innerHTML = "";
    if(value === ''){
        document.querySelector('#password_error').innerHTML = "Please fill this field!";
        return false;
    }
    if(value.length < 6){
        document.querySelector('#password_error').innerHTML = "Password must be atleast 6 characters!";
        return false;
    }

    if(value.length > 30){
        document.querySelector('#password_error').innerHTML = "Password must be maximum 30 characters!";
        return false;
    }
    return true;
}
function correctPasswordRepaet(){
    const password = document.querySelector('#sign-up-password').value;
    const repPassword = document.querySelector('#sign-up-repeat-password').value;
    if(repPassword === ''){
        document.querySelector('#repPassoword_error').innerHTML = "Please fill this field!";
        return false;
    }
    if(password !== repPassword){
       document.querySelector('#repPassoword_error').innerHTML = "Passwords do not match!";
       return false;
    }
    document.querySelector('#repPassoword_error').innerHTML = "";
    return true;
}
function validateBirth(value){
    let currentDate = new Date();
    let newDate = new Date(value);
    let age = currentDate.getFullYear() - newDate.getFullYear();
    
    if(value === ''){
        document.querySelector('#birth_error').innerHTML = "Please fill this field!";
        return false;
    }

    if(age < 14){
        document.querySelector('#birth_error').innerHTML = "You must be atleast 14 years old!";
        return false;
    }

    return true;
}
function validateEmail(value){
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(value === ''){
        document.querySelector('#email_error').innerHTML = "Please fill the field!";
        return false;
    }

    if(!regex.test(value)){
        document.querySelector('#email_error').innerHTML = "The email address is not properly formatted!";
        return false;
    }

    return true;
  
}

document.querySelector("#sign-up-email").addEventListener('input', function(){
    document.querySelector('#email_error').innerHTML = "";
})
document.querySelector("#sign-up-username").addEventListener('input', function(){
    document.querySelector('#username_error').innerHTML = "";
})
document.querySelector("#sign-up-repeat-password").addEventListener('input', function(){
    document.querySelector('#repPassoword_error').innerHTML = "";
})
document.querySelector("#sign-up-password").addEventListener('input', function(){
    document.querySelector('#repPassoword_error').innerHTML = "";
})
document.querySelector("#date-of-birth").addEventListener('input', function(){
    document.querySelector('#birth_error').innerHTML = "";
})
document.querySelector("#sign-up-password").addEventListener('input', function(){
    document.querySelector('#password_error').innerHTML = "";
})

const validations = [];
registerBtn.addEventListener('click', function(e){
    e.preventDefault();

    const username = document.querySelector('#sign-up-username').value;
    const email = document.querySelector('#sign-up-email').value;
    const password = document.querySelector('#sign-up-password').value;
    const repPassword = document.querySelector('#sign-up-repeat-password').value;
    const dob = document.querySelector('#date-of-birth').value;

    validations.push(validateUsername(username))
    validations.push(correctPasswordRepaet(repPassword))
    validations.push(validateBirth(dob))
    validations.push(validatePassword(password))
    validations.push(validateEmail(email))

    if(validateUsername(username) &&  correctPasswordRepaet(repPassword) && validateBirth(dob) && validatePassword(password) && validateEmail(email))
    {
        const form = document.getElementById('sign-up-form');
        form.submit();
        //window.location.href = "/Cloud-Paint-main/assets/html/logIn.html"

    }
})


