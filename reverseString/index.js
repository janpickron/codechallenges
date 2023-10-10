/* ---- Directions
  Given a string, return a new string with the reversed
  order of characters
--- Examples
  reverse('apple') === 'leppa'
  reverse('hello') === 'olleh'
  reverse('Greetings!') === '!sgniteerG'
*/

function reverseString(word) {
  // 1. receive the word
  // 2. convert the string into an array
  // 3. reverse the array 
  // const array1 = ["apple", "hello", "grapes"];
  // const reverseArray = reverse(word);
  return word.split('').reverse().join('')
}

 console.log(reverseString("apple"))
 console.log(reverseString("grapes"))
 console.log(reverseString("hello"))
 console.log(reverseString("Greetings!"))

 module.exports = { reverseString }