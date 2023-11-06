const form = document.querySelector(".form")
const userName = form.querySelector("#username")
const email = form.querySelector("#email")
const number = form.querySelector("#number")
const password1 = form.querySelector("#password1")
const password2 = form.querySelector("#password2")


form.addEventListener("submit", (e) => {
e.preventDefault()
validation()
})


const isEmail = (emailval) => {
    let atSymbol = emailval.indexOf("@") 
    if(atSymbol < 1)return false
    let dot = emailval.lastIndexOf(".")
    if(dot <= atSymbol +2) return false
    if(dot === emailval.length - 1 )return false
    return true
}
function sendData (userNameval, data,count){
    if(data === count){
        swal("Welcome! " + userNameval,"Registetion Success full" , "success")
        setInterval(() => {
            location.href = `page.html?username=${userNameval}`
        }, 3000)
    }
}
function successMsgSend(userNameval){
    const form = document.getElementsByClassName("inpit-box");
    console.log(form)
    let count = form.length - 1;
    for(let i =0; i< form.length; i++){
         if(form[i].className === "inpit-box success"){
            let data = 0 + i;
            sendData(userNameval,data,count)
         }else{
            return false;
         }
    }
}
 
const validation = validation => {
    const userNameval = userName.value.trim()
    const emailval =    email.value.trim()
    const numberval =   number.value.trim()
    const password1val = password1.value.trim()
    const password2Val = password2.value.trim()
    // username validation
    if(userNameval === ""){
        userErrorMsg(userName, "user name cannot be blank")
    }else if(userNameval.length < 3){
        userErrorMsg(userName, "user min 3 cart")
    }else{
        setsuccessmsg(userName)
    }

    // email validation
    if(emailval === ""){
        userErrorMsg(email, "eamil cannot be blank")
    }else if(!isEmail(emailval)){
        userErrorMsg(email, "Not valid email")
    }else{
        setsuccessmsg(email)
    }

    // numberval
    if(numberval === ""){
        userErrorMsg(number, "number cannot be blank")
    }else if(numberval.length != 11){
        userErrorMsg(number, "Not valid number")
    }else{
        setsuccessmsg(number)
    }

    //password1
    if(password1val === ""){
        userErrorMsg(password1, "number cannot be blank")
    }else if(password1val.length < 5){
        userErrorMsg(password1, "Min pass cart 5")
    }else if(password1val.length > 20){
        userErrorMsg(password1, "Max pass cart 20")
    }else{
        setsuccessmsg(password1)
    }

    //password2
    if(password2Val === ""){
        userErrorMsg(password2, "number cannot be blank")
    }else if(password2Val.length < 5){
        userErrorMsg(password2, "Min pass cart 5")
    }
    else if(password1val !== password2Val){
        userErrorMsg(password2, "number no match")
    }
    else if(password2Val.length > 20){
        userErrorMsg(password2, "Max pass cart 20")
    }else{
        setsuccessmsg(password2)
    }
    successMsgSend(userNameval)
}




function userErrorMsg(input, errorMsg){
    const form = input.parentElement
    const small = form.querySelector("small")
    form.className = "inpit-box error"
    console.log(small)
    small.innerText = errorMsg
}

function setsuccessmsg (input){
    const form = input.parentElement
    form.className ="inpit-box success"
}
