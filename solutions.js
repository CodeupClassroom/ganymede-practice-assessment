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
function isTrue(input) {
    if (input === true) {
        return true;
    } else {
        return false
    }
}

function isFalse(input){
    if (input===false){
        return true;
    }else {
        return false;
    }
}

function isEqual (Number) {
    if (Number === Number) {
        return true;
    } else {
        return false;
    }
}
 function isIdentical (input1, input2) {
    if (input1 === input2) {
        return true;
    } else{
        return false;
    }
 }

 function and(input1, input2){
if (input1 === input1 && input2) {
    return true;
} else {
    return false;
}
}
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
function concat (string1, string2){
    return ('string1' + 'string2')
}

function isNaN(input){
    if (input === isNan) {
        return false;
    }else {
        return true;

    }
}

function addOne (number){
    return number + 1;
}