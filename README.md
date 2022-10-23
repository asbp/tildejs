# TildeJS
**NOTE**: This library is still at alpha stage, with few functions to offer, few documentations, and no test units yet. *Use at your own risk* when you intend to use this in *your production app*. **Now this library is functional but not production-ready yet**.

The aim of this library is to provide you with a bunch of JS helper functions, including some you might think is hilarious!

# How to Use?
```js
import tilde from 'tildejs';

let number = 10;
let falsyValue = undefined;
let emptyStr = ""; //Or any operations that might returns empty string.

console.log(tilde.truthy(falsyValue)) //false
console.log(tilde.falsy(falsyValue)); //true

/**
* Check whether emptyStr is falsy or not.
* But when--for example--you've got any HTML Response
* that is identical to an empty string, you might don't want
* to pass that as an error. Below is how we evaluate the variable
* while pretending the empty string is 'truthy' value.
*/
console.log(tilde.falsyExceptEmptyStr(emptyStr)); //false

//Check whether the number is even
let isEven = tilde.when(number % 2 === 0, () => "even", () => "odd"); //even
```

# What's Inside?
**NOTE**: The list is still under construction.
## Truthy-or-Falsy (TOF)
 1. `truthy`: Checks whether the value is truthy.
 2. `falsy`: Checks whether the value is falsy.
 3. `truthyExcept`: Checks whether the value is truthy except if passed the evaluation callback.
 4. `falsyExcept`: Checks whether the value is falsy except if passed the evaluation callback.
 5. `falsyExceptEmptyStr`: Checks whether the value is falsy except if the value is an empty string.
 6. `falsyExceptZero`: Checks whether the value is falsy except if the value is a number zero.

## Conditionable
Inspired by Laravel, this helps you when e.g. you need one-liner but don't want to use ternary operator.

 1. `when`: Call a callback function (and return something if needed) when the condition is truthy, otherwise call a fallback function (or simply returning `undefined` when no fallback function specified in the argument).
 2. `unless`: Call a callback function (and return something if needed) when the condition is falsy, otherwise call a fallback function (or simply returning `undefined` when no fallback function specified in the argument).

## Special Thanks

 1. Advices on how to split the code and bundle them from https://dev.to/0xkoji/create-an-npm-package-template-with-typescript-and-rollup-js-294a .
 2. https://stackedit.io/ -- I edit README.md there.
