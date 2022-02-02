function generatePassword() {
  var length = 15,
    charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+=-{}][|?<>",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  console.log(retVal);
  document.getElementById("password").value = retVal;
}
function copyPassword() {
    var copyText=document.getElementById("password");
    // Select  the text field 
    copyText.select();
    copyText.setSelectionRange(0,99999);
// for mobile devices
// copy text field inside the text field
document.execCommand("copy");
document.getElementById("copied").textContent="Password Copied: "+copyText.value;

}
