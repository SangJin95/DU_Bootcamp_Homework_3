// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var special = ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
  var characters = '';
  let result = ' ';

  var passwordLength = prompt("Please choose a password length between 8 characters and 128 characters.");

  if ((passwordLength < 8) || (passwordLength > 128)) {
    alert("Please input a valid number.");
  }

  var passwordUpper = confirm("Would you like your password to include Uppercase letters?");
  var passwordLower = confirm("Would you like your password to contain lowercase letters?");
  var passwordNumbers = confirm("Would you like your password to contain numbers?");
  var passwordSpecial = confirm("Would you like your password to contain special characters?");

  if ((passwordUpper == false) && (passwordLower == false) && (passwordNumbers == false) && (passwordSpecial == false)) {
    alert("Please choose at least one category of characters to include in your password.")
  }
  
  if (passwordUpper == true) {
    characters.concat(upper);
  }
  else if (passwordLower == true) {
    characters.concat(lower);
  }
  else if (passwordNumbers == true) {
    characters.concat(numbers);
  }
  else if (passwordSpecial == true) {
    characters.concat(special);
  }

  for (let i = 0; i < passwordLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * passwordLength));
  }

  console.log(result);

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
