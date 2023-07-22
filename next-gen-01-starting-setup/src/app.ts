const userName = 'Max';
// userName = 'Maximilian';
let age = 30;

age = 29;

function add(a: number, b: number) {
    let result;
    result = a + b;
    return result;
}

if (age > 20) {
    let isOld = true;
    console.log(isOld)
}

const add2 = (a: number, b: number = 1) => a + b;

console.log(add2(2, 5));

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event));
}
printOutput(add2(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const activeHobbies2 = ['Hiking', ...hobbies];

const person = {
    firstName: 'Max',
    age: 30
}

const copiedPerson = {...person};

const add3 = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0)
}

const addedNumbers = add3(5, 10, 2, 3.7);

const hobby1 = hobbies[0];
const hobby2 = hobbies[1];

const [hobby11, hobby22, ...remainingHobbies] = hobbies; // destructuring, don't change the original array

const {firstName: userName2, age: age2} = person; // destructuring, don't change the original object



