let email=document.querySelector("#email");
let password=document.querySelector("#password");
let form =document.querySelector("form");
form.addEventListener("submit",function(dets){
    dets.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^.{6,}$/;
let emailans=emailRegex.test(email.value);
let passwordans=passwordRegex.test(password.value);

if(!emailans){
    document.querySelector("#emailError").textContent="Email is incorrect"
    document.querySelector("#emailError").style.display="initial"

}
if(!passwordans){
    document.querySelector("#passwordError").textContent="Password is incorrect"
    document.querySelector("#passwordError").style.display="initial"

}
});
