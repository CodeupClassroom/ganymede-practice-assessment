"use strict";

function isTrue(input) {
    return input === true;
}

function isFalse(input) {
    return input === false;
}

function not(input) {
    return !input === true;
}

function addOne(input) {
    return Number(input) + 1;
}

function isEven(input) {
    if (typeof input === "number" || typeof input === "string") {
        return Number(input) % 2 === 0
    } else {
        return false;
    }
}

function isIdentical(input1, input2) {
    return input1 === input2;
}

function isEqual(input1, input2) {
    return input1 == input2;
}

function or(input1, input2) {
    return input1 || input2;
}

function and(input1, input2) {
    return input1 && input2;
}

function concat(string1, string2) {
    return String(string1) + String(string2);
}

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
