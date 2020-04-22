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

function isTrue(v) {
    return v === true;
}

function isFalse(v) {
    return v === false;
}

function not(v) {
    return !(v);
}

function addOne(v) {
    if(isNaN(v))
        return NaN;
    else if(v != Infinity)
    {
        v = parseInt(v);
        v +=1;
    }
    return v;
}

function isEven(v) {
    v = parseInt(v);
    if(v % 2 === 0)
        return true;
    else
        return false;
}

function isIdentical(v1, v2) {
    return v1 === v2;
}

function isEqual(v1, v2) {
    return v1 == v2;
}

function or(v1, v2) {
    return(v1 || v2);
}

function and(v1, v2) {
    return(v1 && v2);
}

function concat(v1, v2) {
    v1 = v1.toString();
    v2 = v2.toString();
    return v1 + v2;
}