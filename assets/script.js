// Function to gather user options
function getPasswordOptions() {

  // Get password Length
  var length = parseInt(
    prompt("how many characters do you want in your password?")
  );

  // check to see if what they entered was a number
  if (Number.isNaN(length)) {
    alert("Password length must be provided as a number!");
    return null;
  }

  // check if it's at least 8 characters long
  if (length < 8) {
    alert("Password length must be at least 8 characters!");
    return null;
  }

  // check to see if it's less then 128 characters
  if (length > 128) {
    alert("Password must be less than 128 characters!");
    return null;
  }

  // ask user for their options
  var hasSpecialCharacters = confirm("Click OK to comfirm Special characters")
  var hasNumericCharacters = confirm("Click OK to comfirm Numeric characters")
  var hasLowerCaseCharacters = confirm("Click OK to comfirm Lower Case characters")
  var hasUpperCaseCharacters = confirm("Click OK to comfirm Upper Case characters")

  // ensure they chose something 
  if (
    hasSpecialCharacters === false &&
    hasLowerCaseCharacters === false &&
    hasNumericCharacters === false &&
    hasUpperCaseCharacters === false 
  ) {
    alert("Please Choose Something!");
    return null;
  }

  // store user selections in an object + return it
var getPasswordOptions = {
  length: length,
  hasSpecialCharacters: hasSpecialCharacters,
  hasLowerCaseCharacters: hasLowerCaseCharacters,
  hasNumericCharacters: hasNumericCharacters,
  hasUpperCaseCharacters: hasUpperCaseCharacters
};

return getPasswordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];

  return randomElement;
}

// Function to generate password 
function generatePassword() {

  // Grab user options
  var options = getPasswordOptions();

  // Array to store the result
  var result = [];

  // Array to store possible characters
  var possiblecharacters = [];

  //array to store guaranteed characters
  var guaranteedCharacters = [];

  // check to see if options exist
  if (!options) return null;

  // add selected characters to an array of possible characters
  if (options.hasSpecialCharacters) {
    possiblecharacters = possiblecharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  
  if (options.hasNumericCharacters) {
    possiblecharacters = possiblecharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }
  
  if (options.hasLowerCaseCharacters) {
    possiblecharacters = possiblecharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (options.hasUpperCaseCharacters) {
    possiblecharacters = possiblecharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  // loop over the passwords length, selecting random indicies from the possible characters and adding them to the result array
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possiblecharacters);

    result.push(possibleCharacter);
  }

  // mix in at least one of the guaranteed characters in the result
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  // transform the results into a string and pass it into writePassword

  return result.join('');
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
