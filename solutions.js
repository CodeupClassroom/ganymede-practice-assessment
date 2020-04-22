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

function isTrue(input){
   return input === true;
}

function isFalse(num){
    return (num) === false;
}

function not(num1){
    return (!num1);
}

function addOne(num2){
    return parseFloat(num2) + 1;
}

function isEven(input1){
    return parseFloat(input1) % 2 === 0;
}

function isIdentical(num1, num2){
    return (num1 === num2);
}

function isEqual(num1, num2){
    return (num1 == num2);
}

function or(num1, num2){
    return num1 || num2;
}

function and(input2, input3){
    return input2 && input3;
}

function concat(input1, input2){
    return "" + input1 + input2;
}