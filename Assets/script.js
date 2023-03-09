// Password Variables
var numbers = ["1","2","3","4","5","6","7","8","9"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharacters = ["!", "\\", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

   
let allCharacters= [];
let ifAccept = true;
let emptyPassword = [];


var generateBtn = document.querySelector("#generate");

// Event listner for generate button, if else statement for password questions

generateBtn.addEventListener("click",function () {

    const length = window.prompt("How long do you want your password to be?"); 
  
    if (length >= 8  && length <= 128) {

      ifConfirm = window.confirm(" Would you like to inlcude Upper Case letters in your password?");       
        if (ifAccept) {              
          allCharacters = allCharacters.concat(upperCase);          
        }
      
        ifAccept = window.confirm(" Would you like to inlcude Lower Case letters in your password?");
        if (ifAccept) {     
          allCharacters = allCharacters.concat(lowerCase);
        }

        ifAccept = window.confirm(" Would you like to include Numbers in your password?");
        if (ifAccept) {
          allCharacters = allCharacters.concat(numbers);
        }

        ifAccept = window.confirm(" Would you like to inlcude Special Characters in your password?");
        if (ifAccept) {
          allCharacters = allCharacters.concat(specialCharacters);
        }

    }
    
    else {

        window.alert("Your password must be between 8 and 128 characters long. Please Try Again!");
        
      
    }

    for (let i=0; i < length; i++) {
      
        emptyPassword.push(allCharacters[Math.floor(Math.random() * allCharacters.length)]);
      
    }

    var passwordBox = document.querySelector("#password");
    passwordBox.value = emptyPassword.join("");

})
