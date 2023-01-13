"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function printResultVoid(num) {
    console.log('Result: ' + num);
}
function printResultUndefined(num) {
    console.log('Result: ' + num);
    return undefined;
}
printResult(add(4, 5));
let combineValues;
combineValues = add;
// combineValues = 5; // got an error
combineValues = printResult; // runtime error
console.log(combineValues(3, 5));
let someValue;
let combineValues2; // takes no parameter and return a number
let combineValues3; // takes 2 parameters and return a number
combineValues3 = add;
// combineValues3 = printResult; // got an error
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    const fixedResult = cb(result);
    console.log(fixedResult);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
    return result;
});
