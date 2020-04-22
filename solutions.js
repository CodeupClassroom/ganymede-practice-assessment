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

function isTrue(x) {
    return x === true;
};

isTrue(true)             // true
isTrue(false)            // false
isTrue(0)                // false
isTrue(null)             // false
isTrue("true")           // false
isTrue("Banana")         // false
isTrue([1, 2])           // false

function isFalse(x) {
    return x === false;
}
isFalse(false)             // true
isFalse(true)              // false
isFalse(0)                 // false
isFalse(null)              // false
isFalse("")                // false
isFalse("Banana")          // false
isFalse([1, 2])            // false


function not(x) {
    return x === false;
}
not(false)                  // true
not(0)                      // true
not("")                     // true
not(null)                   // true
not(NaN)                    // true
not(undefined)              // true
not(true)                   // false
not("something")            // false
not(Infinity)               // false
not(123)                    // false

var num = false;
function addOne(num) {
    return num + 1;
}
addOne(0)                    // 1
addOne(2)                    // 3
addOne(-5)                   // -4
addOne(5.789)                // 6.789
addOne(Infinity)             // Infinity
addOne("2")                  // 3
addOne("0")                  // 1
addOne("banana")             // NaN
addOne(true)                 // NaN
addOne(NaN)                  // NaN

function isEven(x) {
    if (x % 2 === 0) {
        return true;
    } else if ("x" % 2 === 0) {
        return true;
    } else if (x === false) {
        return false;
    }
}
isEven(2)                   // true
isEven(-8)                  // true
isEven(0)                   // true
isEven("42")                // true
isEven(1)                   // false
isEven("-3")                // false
isEven(false)               // false
isEven("banana")            // false

function isIdentical(x, y) {
    if(x === y) {
        return true;
    } else {
        return false;
    }
}
isIdentical(3, 3)                     // true
isIdentical(false, false)             // true
isIdentical("hello", "hello")         // true
isIdentical(3, 3.0)                   // true
isIdentical(undefined, undefined)     // true
isIdentical(2, "2")                   // false
isIdentical("javascript", "java")     // false

function isEqual(x,y) {
    if (x == y) {
        return true;
    } else {
        return false;
    }
}

isEqual(3, "3")                       // true
isEqual("abc123", "abc123")           // true
isEqual(true, 1)                      // true
isEqual(0, false)                     // true
isEqual(4, -5)                        // false
isEqual("java", "javascript")         // false

function or(x,y) {
    return x || y;
}

or(true, true)                    // true
or(true, false)                   // true
or(false, true)                   // true
or(false, false)                  // false
or("hello", "world")              // "hello" (this behavior is non-obvious, research more!)

function and (x, y) {
    return x && y;
}

and(true, true)                    // true
and(true, false)                   // false
and(false, true)                   // false
and(false, false)                  // false
and("hello", "world")              // "world" (this behavior is non-obvious, research more)

function concat(x, y) {
    return 'x' + 'y';
}

concat("code", "up")                // "codeup"
concat("connect", 4)                // "connect4"
concat("hello", "world")            // "helloworld"
concat(4, 2)                        // "42"
concat(true, true)                  // "truetrue"






