// Assignment Code
var generateBtn = document.querySelector("#generate");

// Characters that will be used in the password generator
const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = [0,1,2,3,4,5,6,7,8,9]
const special = ["!","@","#","$","%","^","&","*","/"]


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
// Step 2 Ask if the user wants to use uppercase
var useUppercase = confirm("Would you like to include uppercase letters?")
// Step 3 Ask if the user wants to use lowercase
var useLowercase = confirm("Would you like to include lowercase letters?")
// Step 4 Ask if the user wants to use numbers
var useNumbers = confirm("Would you like to include numbers?")
// Step 5 Ask if the user wants to use special
var useSpecial = confirm("Would you like to include special characters?")


}