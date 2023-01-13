function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result: ' + num);
}

function printResultVoid(num: number): void {
    console.log('Result: ' + num);
}

function printResultUndefined(num: number): undefined {
    console.log('Result: ' + num);
    return undefined;
}

printResult(add(4, 5));

let combineValues: Function;

combineValues = add;
// combineValues = 5; // got an error
combineValues = printResult; // runtime error

console.log(combineValues(3, 5));

let someValue: undefined;


let combineValues2: () => number; // takes no parameter and return a number
let combineValues3: (a: number, b: number) => number; // takes 2 parameters and return a number
combineValues3 = add;

// combineValues3 = printResult; // got an error

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) { // void means we don't care about the return type
    const result = n1 + n2;
    const fixedResult = cb(result);
    console.log(fixedResult)
}

addAndHandle(10, 20, (result) => {
    console.log(result);
    return result;
});