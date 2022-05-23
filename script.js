var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

var nameSuccess=document.getElementById('name-success');
var emailSuccess=document.getElementById('email-success');
var phoneSuccess=document.getElementById('phone-success');
var messageSuccess=document.getElementById('message-success');
var submitSuccess=document.getElementById('submit-success');




function validateName(){
    var name = document.getElementById('contact-name').value;
    if(name.length == 0){
        nameSuccess.innerHTML='';
        nameError.innerHTML='Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameSuccess.innerHTML='';
        nameError.innerHTML='write full name';
        return false;


    }
    nameError.innerHTML=''
    nameSuccess.innerHTML='✔';
    return true;
}
function validatePhone(){
    var phone = document.getElementById('phone-number').value;
    if(phone.length==0){
        phoneSuccess.innerHTML='';
        phoneError.innerHTML='Phone number is required';
        return false;

    }
    if(phone.length !== 10){
        phoneSuccess.innerHTML='';
        phoneError.innerHTML='Phone number should be 10 digits';
        return false;
        
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneSuccess.innerHTML='';
        phoneError.innerHTML='enter a valid phone number';
        return false;
        
    }
    phoneError.innerHTML=''
    phoneSuccess.innerHTML='✔';
    return true;
}
function validateEmail(){
    var email=document.getElementById('contact-email').value;
    if(email.length==0){
        emailSuccess.innerHTML='';
        emailError.innerHTML='Email is required';
        
        return false;

}
    if(!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
        
        emailSuccess.innerHTML='';
    
   
    emailError.innerHTML = 'Email invalid';
    
    return false;
}
 
emailSuccess.innerHTML='';


// function validateEmail(){
//     var email = document.getElementById('contact-email').value;
//     if(email.length == 0){
//         emailSuccess.innerHTML='';
//         emailError.innerHTML = 'email is required'
//         return false;
//     }
//     if(!email.match(/^[A-Za-z\._\-[0-9][@][A-Za-z][\.][a-z]{2,4}$/)){
//         emailSuccess.innerHTML='';
//         emailError.innerHTML = 'email invalid';
//         return false;
//     }
//     emailError.innerHTML = 'valid';
//       return true;
// }
emailSuccess.innerHTML='✔';
return true;

}
function validateMessage(){
    var message=document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if(left>0){
        messageSuccess.innerHTML='';
        messageError.innerHTML = left + 'More chatacters required';
        return false;
        

    }
    messageError.innerHTML='';
    messageSuccess.innerHTML='	✔';
}
function validateForm(){
    if(!validateName()|| !validatePhone()|| !validateEmail()|| !validateMessage()){

        submitError.style.display='block'
        submitSuccess.innerHTML='';
        submitError.innerHTML='please fix the error to submit';
        setTimeout(function(){submitError.style.display='none';},3000);
        return false;
    }
    submitSuccess.innerHTML='message send successful';
}