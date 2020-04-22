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

function isTrue(something){
    return something === true;
}

//console.log(isTrue(true));
//console.log(isTrue(false));
//console.log(isTrue(null));

function isFalse(anotherSomething){
    return anotherSomething === false;
}
//console.log(isFalse(false));
//console.log(isFalse(true));
//console.log(isFalse(""));

function not(alsoNot) {
    return !alsoNot;
}

//console.log(not(false));
//console.log(not(0));
//console.log(not(true));

function addOne(added) {
    return ++added
}

function isEven(num) {
    if(num%2 === 0){
        return true;
    }else{
        return false;
    }

}

function isIdentical(twin1, twin2) {
    if (twin1 === twin2){
        return true;
    } else{
        return false;
    }
}

function isEqual(twin1, twin2){
    if (twin1 === twin2){
        return true
    }
}
