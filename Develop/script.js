// Variables
var passwordInput =[];
var passwordLength = 12;
var numbers = ["1","2","3","4","5","6","7","8","9"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharacters = ["!", "\\", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var passwordDone = [];
   
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  userPrompts();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var userInfo = userPrompts();

function userPrompts(){
  var passwordLength = parseInt(prompt("How long do you want your password to be?"))
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8 - 128 characters long.")
    return false
  }

  if (confirm("Would you like to include lower case letters in your password?")) {
    passwordInput = passwordInput.concat(lowerCase)
  }

  if (confirm("Would you like to include upper case letters in your password?")) {
    passwordInput = passwordInput.concat(upperCase)
  }

  if (confirm("Would you like to include numbers in your password?")) {
    passwordInput = passwordInput.concat(numbers)
  }

  if (confirm("Would you like to include special characters in your password?")) {
    passwordInput = passwordInput.concat(specialCharacters)
  }
  console.log(passwordInput);
  
  for (var i = 0; i < passwordLength.length; index++) {
    passwordInput[ Math.floor( Math.random() * passwordLength)];
  }

}
