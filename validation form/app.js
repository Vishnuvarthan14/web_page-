const username=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('Password')
const cpassword=document.getElementById('cpassword')
const form=document.querySelector('#Validate')
console.log("0")
form.addEventListener('submit',(e)=>{
       
        if(!Validateitems())
            {
                e.preventDefault()
            }
            console.log('1')
        
})
function Validateitems()
{
    const usernameval=username.value.trim()
    const emailval=email.value.trim()
    const passval=password.value.trim()
    const cpasswordval=cpassword.value.trim()
    let success=true;
if(usernameval===""){
            seterror(username,"Please enter the User name")
        console.log("hey")
        success=false
}
     else
      setsuccess(username)
if(emailval==="")
        {seterror(email,"Email is empty")
    success=false}    
     else if(!validateEmail(emailval))
        {seterror(email,"Please enter the valid email")
    success=false}
   
    else
    setsuccess(email)

 if(passval==='')
        {seterror(password,"Please enter the password")
 success=false}
    else if(passval.length<8)
        {success=false
        seterror(password,"Your password must contain more than 8 charactors")}
    else
    setsuccess(password )

if(cpasswordval==='')
        { seterror(cpassword," Please  enter the confirmation password")
     success=false}
    else if(cpasswordval!=passval)
     { seterror(cpassword,"Re-enter the confirmation password")
    success=false}
   
    else
    setsuccess(cpassword)
}
function seterror(element,message)
{
    const parent=element.parentElement;
    const errorelement=parent.querySelector(".error")
    errorelement.innerText=message
    parent.classList.add("error")
    parent.classList.remove("success")
}
function setsuccess (element){
        const parent=element.parentElement;
        const errorelement =parent.querySelector('.error')
        errorelement.innerText=""
        parent.classList.add('success')
        parent.classList.remove('error')
}
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }