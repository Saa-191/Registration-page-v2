const forms = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const uname = document.getElementById('uname');
const email = document.getElementById('email');

const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

const fname_error = document.getElementById('fname-error');
const lname_error = document.getElementById('lname-error');
const email_error = document.getElementById('email-error');
const password_error = document.getElementById('password-error');
const cpassword_error = document.getElementById('cpassword-error');





forms.addEventListener('submit',(e)=>
{
    
    var email_check = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(fname.value === '' || fname.value == null)
        {
            e.preventDefault(); 
            fname_error.innerHTML = "Firstname is required";

        }
    else{
        fname_error.innerHTML = "";
    } 
    if(lname.value === '' || lname.value == null)
        {
            e.preventDefault(); 
            lname_error.innerHTML = "lastname is required";

        }
    else{
        lname_error.innerHTML = "";
    }     


        if(!email.value.match(email_check))
            {
                e.preventDefault(); 
            email_error.innerHTML = "Valid Email is required";
            }
            else{
                email_error.innerHTML = "";
            }      
            
            
        
        if(password.value.length <=8)
            {
                e.preventDefault(); 
                password_error.innerHTML = "Password must contain 8 characters";
        
            } 
            else{
                password_error.innerHTML = "";
            }       
        if(password.value.length >=15)
            {
                e.preventDefault(); 
                password_error.innerHTML = "Password cant be more than 15 characters";
            
            }            
            if(password.value == 'password')
                {
                    e.preventDefault(); 
                    password_error.innerHTML = "Password cannot be password please choose another";
                
                } 
                     
            if(cpassword.value != password.value) 
                {
                    e.preventDefault(); 
                    cpassword_error.innerHTML = "Password Must be same";  
                }   


})