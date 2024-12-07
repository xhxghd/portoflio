var erorrEl = document.getElementById("erorr");
var erorrEl = document.getElementById("erorr");
var form = document.getElementById("form");
var textName = document.getElementById("textName");
var email = document.getElementById("email");
var number = document.getElementById("number");
var massage = document.getElementById("massage");

form.addEventListener('submit',function(event){
    let erorr = [];
 //    if the name empty
    if(textName.value === ''|| textName == null){
       erorr.push("the name reqiured");
       textName.style.border = "2px solid rgba(200, 100, 100,.707)"
    }
 //    if the email empty
    if(email.value === ''|| email == null){
       erorr.push("the email reqiured");
       email.style.border = "2px solid rgba(200, 100, 100,.707)"
    }
 //    if the number empty
    if(number.value === ''|| number == null){
       erorr.push("the number reqiured");
       number.style.border = "2px solid rgba(200, 100, 100,.707)"
    }
    if(erorr.length > 0){
    event.preventDefault();
    erorrEl.innerHTML = erorr.join("<br><br>");
    erorrEl.style.opacity = "1";
    }
 });