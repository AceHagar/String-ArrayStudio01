const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let arr = str.split('');
let str1 = (arr.slice(0,3).join())
let str2 = (arr.slice(4,10).join())


str3 = str2.concat(str1)
let newStr =(str3.replace(",", "").replace(",", "").replace(",", "").replace(","," ").replace(" ", "").replace(",", "").replace(",","").replace(",", ""))

console.log(newStr)
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str} becomes ${newStr}`)


//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let answer = prompt("How many characters would you like to relocate?")


//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (answer > 9) {
  answer = 3
  console.log(`Your input of ${answer} exceeds limit and reverts to 3.`)
}

