"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

//1 .Define a function named isTrue that takes in any input and returns true if the input provided
// is exactly equal to true in value and data type.

function isTrue(input) {
    return input === true;
}

console.log(isTrue(true));             // true
console.log(isTrue(false));           // false
console.log(isTrue(0));             // false
console.log(isTrue(null));          // false
console.log(isTrue("true"));           // false
console.log(isTrue("Banana"));      // false
console.log(isTrue([1, 2]));          // false


// 2.  Define a function named isFalse that takes in a value
// and returns a true if and only if the provided input is equal to false in both type and value.
function isFalse (input) {
    return input === false;
}

console.log(isFalse(false));             // true
console.log(isFalse(true));           // false
console.log(isFalse(0));                 // false
console.log(isFalse(null));              // false
console.log(isFalse(""));              // false
console.log(isFalse("Banana"));          // false
console.log(isFalse([1, 2]));       // false


// 3. Define a function named not that takes in any input and returns the boolean opposite of the provided input.

function not (input) {
    return input == !!true || !!false;
}


// 4. Define a function named addOne that takes in a single input.
// If the input is a number or a numeric string, return the value plus one.

function addOne (input) {
    return input === 5 + 1 && '5' === input + 1;
}

//Define a function named isEven that takes in a single input. If the input is an even number or a
// string containing an even number, return true. Any other input should return false for the output.

// Define a function named concat that takes in two input arguments. If both arguments are strings, then return the concatenated result.
// If two numbers are provided, then return the string concatenation of each set of numerals.

function concat(str1, str2) {
    if(str1 ==="string" && str2 === "5");
    return str1 + str2;
}


//Define a function named and that takes in two input arguments and returns the result of a logical and operation of both inputs.
function and (x, y) {
    return x && y;
}

// Define a function named or that takes in two input arguments. The output returned should be the result of an or operation on both inputs.
function or (frog, cow) {
    return frog || cow;
}









