// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Initializing variables for use in creating password
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var special = ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
  var characters = '';
  var guaranteedCharacters = '';
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
  // if (passwordUpper == true) {
  //   characters = characters.concat(upper);
  //   if (passwordLower == true) {
  //     characters = characters.concat(lower);
  //     if (passwordNumbers == true) {
  //       characters = characters.concat(numbers);
  //       if (passwordSpecial == true) {
  //         characters = characters.concat(special);
  //       }
  //     }
  //     if (passwordNumbers == false){
  //       if (passwordSpecial == true) {
  //         characters = characters.concat(special);
  //       }
  //     }
  //   }
  //   if (passwordLower == false) {
  //     if (passwordNumbers == true) {
  //       characters = characters.concat(numbers);
  //       if (passwordSpecial == true) {
  //         characters = characters.concat(special);
  //       }
  //     }
  //     if (passwordNumbers == false){
  //       if (passwordSpecial == true) {
  //         characters = characters.concat(special);
  //       }
  //     }
  //   }
  // }
  // if (passwordUpper == false) {
  //   if (passwordLower == true) {
  //     characters = characters.concat(lower);
  //     if (passwordNumbers == true) {
  //       characters = characters.concat(numbers);
  //       if (passwordSpecial == true) {
  //         characters = characters.concat(special);
  //       }
  //     }
  //     if (passwordNumbers == false){
  //       if (passwordSpecial == true) {
  //         characters = characters.concat(special);
  //       }
  //     }
  //   }
  //   if (passwordLower == false) {
  //     if (passwordNumbers == true) {
  //       characters = characters.concat(numbers);
  //       if (passwordSpecial == true) {
  //         characters = characters.concat(special);
  //       }
  //     }
  //     if (passwordNumbers == false){
  //       if (passwordSpecial == true) {
  //         characters = characters.concat(special);
  //       }
  //     }
  //   }
  // }

  if (passwordUpper) {
    characters = characters.concat(upper);
    guaranteedCharacters = guaranteedCharacters.concat(upper.charAt(Math.floor(Math.random() * upper.length)));
  }
  if (passwordLower) {
    characters = characters.concat(lower);
    guaranteedCharacters = guaranteedCharacters.concat(lower.charAt(Math.floor(Math.random() * lower.length)));
  }
  if (passwordNumbers) {
    characters = characters.concat(numbers);
    guaranteedCharacters = guaranteedCharacters.concat(numbers.charAt(Math.floor(Math.random() * numbers.length)));
  }
  if (passwordSpecial) {
    characters = characters.concat(special);
    guaranteedCharacters = guaranteedCharacters.concat(special.charAt(Math.floor(Math.random() * special.length)));
  }

  console.log('CHARACTERS: ', characters);
  console.log('GUARANTEED CHARACTERS: ', guaranteedCharacters);

  // Generates random string from the resulting characters list
  for (let i = 0; i < passwordLength; i++) {
    console.log('RESULT: ', characters.charAt(Math.floor(Math.random() * characters.length)));
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  for (let j = 0; j < guaranteedCharacters.length; j++) {
    // result.charAt(j).replace(guaranteedCharacters.charAt(j));
    result = result.replace(result.charAt(j), guaranteedCharacters.charAt(j));
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
