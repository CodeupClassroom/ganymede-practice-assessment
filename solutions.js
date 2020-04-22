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
    if (input === true) {
        return true;
    } else {
        return false;
    }
}

// 2
function isFalse (input) {
    if (input === false) {
        return true;
    } else {
        return false;
    }
}

//3
function not(input) {
    return !input;
}

// 4
function addOne (input) {
    return ++ input;
}

// 5
function isEven(value) {
    if (value%2 === 0)
        return true;
    else
        return false;
}

// 6
function isIdentical (inpOne, inpTwo) {
    if (inpOne === inpTwo) {
        return true;
    } else {
        return false;
    }
}

// 7
function isEqual (inpOne, inpTwo) {
    if (inpOne == inpTwo) {
        return true;
    } else {
        return false;
    }
}

// 8
function or(x, y) {
    return x === y || y === x;
}

// 9
function and(x, y) {
    return
}

// 10
function concat(x, y) {
    var value = x + y;
    return value;
