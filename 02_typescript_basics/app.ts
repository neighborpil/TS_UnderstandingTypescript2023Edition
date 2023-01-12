function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result: ' + num);
}

function printResultVoid(num: number):void {
    console.log('Result: ' + num);
}

function printResultUndefined(num: number):undefined{
    console.log('Result: ' + num);
    return undefined;
}

printResult(add(4, 5));

let someValue: undefined;