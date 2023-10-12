// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
//   palindrome("racecar") === true

function palindrome(word) {
  let revWord = ""; // init variable for storing reverse string
  for (let i = word.length - 1; i >= 0; i--) {
    revWord = revWord + word[i];
  }

  return revWord === word;
}

console.log(palindrome("abba"));
console.log(palindrome("abcdefg"));
console.log(palindrome("racecar"));

module.exports = { palindrome };
