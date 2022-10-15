// Assignment Code
var generateBtn = document.querySelector("#generate");

// Characters that will be used in the password generator
const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = [0,1,2,3,4,5,6,7,8,9]
const special = ["!","@","#","$","%","^","&","*","/"]

// Pulls random numbers
function getRandomInt (max) {
  return Math.ceil(Math.random()*max)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Function to generate password
function generatePassword() {
// Step 1 Ask how many characters does the user want the password to be?
var passwordLength = prompt("How many characters would you like your password to be? (8-128)")

if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Password length must be between 8 and 128 characters")
  return
}
if (isNaN(passwordLength)) {
  window.alert("That is not a number")
  return
}
// Step 2 Ask if the user wants to use uppercase
var useUppercase = confirm("Would you like to include uppercase letters?")
// Step 3 Ask if the user wants to use lowercase
var useLowercase = confirm("Would you like to include lowercase letters?")
// Step 4 Ask if the user wants to use numbers
var useNumbers = confirm("Would you like to include numbers?")
// Step 5 Ask if the user wants to use special
var useSpecial = confirm("Would you like to include special characters?")


// Create one element to store all characters in password
var potentialChars = []
if (useUppercase) {
  potentialChars = potentialChars.concat(uppercase)
}

if (useLowercase) {
  potentialChars = potentialChars.concat(lowercase)
}

if (useNumbers) {
  potentialChars = potentialChars.concat(numbers)
}

if (useSpecial) {
  potentialChars = potentialChars.concat(special)
}




// Create the length of password

var password = ''
for (var i = 0; i < passwordLength; i++){
  password = password + potentialChars[getRandomInt(potentialChars.length)]
}

// logs password in the box on the webpage
console.log()
  return password
}