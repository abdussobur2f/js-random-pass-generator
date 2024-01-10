
var display = document.querySelector('.display')
var btn = document.querySelector('.btn')
var copyText = document.getElementById("copyText");
btn.addEventListener("click",  generatePassword)

copyText.addEventListener("click" ,copyPassword)

 function generatePassword() {
   var screctKey =
     "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCcsaadDEFGHIJKLMNOPQRSTUVWXYZ";
   var passwordLength = 12;
   var password = "";
   for (var i = 0; i <= passwordLength; i++) {
     var randomNumber = Math.floor(Math.random() * screctKey.length);
     password += screctKey.charAt(randomNumber);
   }
   display.value = password;
 }
 
 function copyPassword() {
 
  display.select();
  display.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(display.value);

    // alert 

    alert('Copy' + "  " + display.value)
 }