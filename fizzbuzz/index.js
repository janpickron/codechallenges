/**
 * The Problem
 * Write a program that takes one number and print the number.
 * If the number is multiple of 3 print “Fizz” instead of the number.
 * If the number is multiple of 5 print “Buzz” instead of the number.
 * If the number is multiple of both 3 and 5 print “FizzBuzz”.
 */

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

fizzBuzz(24);
fizzBuzz(9);
fizzBuzz(35);
fizzBuzz(15);
fizzBuzz(63);
fizzBuzz(49);