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

function isTrue (input) {
    return input === true;
}

function isFalse(input) {
    return input === false;
}
//===============================wrong
// function not(input) {
//     return (input !== true);
// }

//correct
function not(input) {
    return !input
}


// ==============================wrong
// function addOne (input) {
//     return (input + 1);
// }

//correct
function addOne(input) {
    return parseFloat(input) + 1;
}


//================================wrong
// function isEven (input) {
//     return input % 2 === 0;
// }

//CORRECT
function isEven(input) {
    return parseFloat(input) % 2 ===0;
}

function isIdentical (input1, input2) {
    return input1 === input2;
}

function isEqual (input1, input2) {
    return input1 == input2;
}

function or (input1, input2) {
    return input1 || input2;
}

function and (input1, input2) {
    return input1 && input2;
}


// //=====================================wrong
// function concat (input1, input2) {
//     return input1.concat(input2);
// }

//correct
function concat (input1, input2) {
    return '' + input1 + input2 ;
}