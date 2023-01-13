let userInput: unknown; // This is almost same as "let userInput;" or "let userInput: any"
let userInputAny: any;
let userName: string;

userInput = 5;
userInput = 'Max';
userInputAny = 'MaxAny';
// userName = userInput; // got an error
userName = userInputAny; // no error

if (userInput === 'string') {
    userName = userInput;
}

// Never type
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

const result = generateError('An error occured!', 500);
console.log(result); // this code doesn't execute because exception will be thrown before this code