// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Initializing variables for use in creating password
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var special = ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
  var characters = '';
  let result = ' ';

  // Asks user for the desired password length
  var passwordLength = prompt("Please choose a password length between 8 characters and 128 characters.");

  // Catch case if user does not input a correct number for the length of password
  if ((passwordLength < 8) || (passwordLength > 128)) {
    alert("Please input a valid number.");
    window.reload();
  }

  // prompts for user to choose which characters they want in their password
  var passwordUpper = confirm("Would you like your password to include Uppercase letters?");
  var passwordLower = confirm("Would you like your password to contain lowercase letters?");
  var passwordNumbers = confirm("Would you like your password to contain numbers?");
  var passwordSpecial = confirm("Would you like your password to contain special characters?");

  // Catch case if user doesn't specify any characters for their password
  if ((passwordUpper == false) && (passwordLower == false) && (passwordNumbers == false) && (passwordSpecial == false)) {
    alert("Please choose at least one category of characters to include in your password.")
  }
  
 
  // If statements to catch all cases of different combinations of user chosen characters for the password
  if (passwordUpper == true) {
    characters = characters.concat(upper);
    if (passwordLower == true) {
      characters = characters.concat(lower);
      if (passwordNumbers == true) {
        characters = characters.concat(numbers);
        if (passwordSpecial == true) {
          characters = characters.concat(special);
        }
      }
      if (passwordNumbers == false){
        if (passwordSpecial == true) {
          characters = characters.concat(special);
        }
      }
    }
    if (passwordLower == false) {
      if (passwordNumbers == true) {
        characters = characters.concat(numbers);
        if (passwordSpecial == true) {
          characters = characters.concat(special);
        }
      }
      if (passwordNumbers == false){
        if (passwordSpecial == true) {
          characters = characters.concat(special);
        }
      }
    }
  }
  if (passwordUpper == false) {
    if (passwordLower == true) {
      characters = characters.concat(lower);
      if (passwordNumbers == true) {
        characters = characters.concat(numbers);
        if (passwordSpecial == true) {
          characters = characters.concat(special);
        }
      }
      if (passwordNumbers == false){
        if (passwordSpecial == true) {
          characters = characters.concat(special);
        }
      }
    }
    if (passwordLower == false) {
      if (passwordNumbers == true) {
        characters = characters.concat(numbers);
        if (passwordSpecial == true) {
          characters = characters.concat(special);
        }
      }
      if (passwordNumbers == false){
        if (passwordSpecial == true) {
          characters = characters.concat(special);
        }
      }
    }
  }

  // Generates random string from the resulting characters list
  for (let i = 0; i < passwordLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * passwordLength));
  }

  return result;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
