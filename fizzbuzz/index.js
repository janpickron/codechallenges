/**
 * The Problem
 * Write a program that takes one number and print the number.
 * If the number is multiple of 3 print “Fizz” instead of the number.
 * If the number is multiple of 5 print “Buzz” instead of the number.
 * If the number is multiple of both 3 and 5 print “FizzBuzz”.
 */
// Print out numbers 1-100 and if the number is divisible by 
// 3 or 5 print out FizzBuzz if is only by 3 print Fizz if by 5 Buzz

function fizzBuzz(num) {
   if ((num % 3 === 0) && (num % 5 === 0)) {
      console.log("FizzBuzz is ", num) }
   else if (num % 3  === 0) {
      console.log("Fizz is ", num) }
      else if (num % 5 === 0) {
         console.log("Buzz is ", num)
       }
       else 
       console.log("No match for Fizz or Buzz ", num)
}
console.log("_____________________________")
console.log("FizzBuzz version 1")
console.log("_____________________________")
fizzBuzz(24);
fizzBuzz(9);
fizzBuzz(35);
fizzBuzz(15);
fizzBuzz(63);
fizzBuzz(49);

// Print out numbers 1-100 and if the number is divisible by 3 or 5
//  print out FizzBuzz if is only by 3 print Fizz if by 5 Buzz

function fizzBuzz_v2() {
   console.log("_____________________________")
   console.log("FizzBuzz version 2")
   console.log("_____________________________")
   for (num=0; num <= 100; num++) {
      if ((num % 3 === 0) && (num % 5 === 0)) {
         console.log("FizzBuzz is ", num) }
      else if (num % 3  === 0) {
         console.log("Fizz is ", num) }
         else if (num % 5 === 0) {
            console.log("Buzz is ", num)
          }
          else 
          console.log("No match for Fizz or Buzz ", num)
   }
}

fizzBuzz_v2();