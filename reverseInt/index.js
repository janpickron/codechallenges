// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// remember it has to return a number type not string!!!
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(num) {
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
}

console.log(reverseInt(15));
console.log(reverseInt(981));
console.log(reverseInt(500));
console.log(reverseInt(-15));
console.log(reverseInt(-90));

module.exports = { reverseInt };
