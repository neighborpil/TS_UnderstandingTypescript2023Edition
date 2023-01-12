function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function printResultUndefined(num) {
    console.log('Result: ' + num);
    return undefined;
}
printResult(add(4, 5));
var someValue;
