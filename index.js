// 1. Rewrite the Problem in Your Own Words
        // I'm writing a function that takes in one argument, a string.
        // The function will return true if the string is a palindrome, false if it's not a palindrome.
        // A palindrome is a word or phrase that is spelled the same way read forwards or backwards.
// 2. Write Your Own Test Cases
        // I expect calling isPalindrome with the string "abba" will return true

        // I expect calling isPalindrome with the string "granola" will return false
// 3. Pseudocode
      // define function isPalindrome(word)
      // define three functions inside isPalindrome:
      // 1. splitString(). This creates an array of the individual characters in the string argument
      // 2. reverseArray(). This will reverse the order of the items in the new array
      // 3. joinArray(). This will join the array's items into a string
      // 4. if joinArray is exactly equal to word, return true.
// 4. Code
// 5. Make It Clean and Readable
// 6. Optimize

const isPalindrome = (word) => {
  let splitString = word.split("")
  let reverseArray = splitString.reverse()
  let joinArray = reverseArray.join("")
   if (joinArray === word) {
    return true 
   }
   else if (joinArray != word) {
    return false
   }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
