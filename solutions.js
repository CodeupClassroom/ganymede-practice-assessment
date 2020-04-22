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
 *
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

function isTrue(isTrueInput) {

    return isTrueInput === true;
}


function not(notInput) {
    return !notInput === true;
}


function addOne(addOneInput) {

        return Number(addOneInput) + 1;
}


function isEven(isEvenInput) {
    return isEvenInput % 2 === 0;
}

function isFalse(isFalseA) {
    return isFalseA === !true;
}

function isIdentical(argA, argB) {
    if(argA === argB) {
        return true;
    } else {
        return false;
    }
}

function isEqual (isEqualA, isEqualB) {
    if(isEqualA == isEqualB){
        return true;
    } else {
        return false;
    }
}

function or(or1, or2) {
    return or1 || or2;
}

function and(and1, and2) {
    return and1 && and2;
}

function concat(concat1, concat2) {
    return concat1.concat(concat2);
}

