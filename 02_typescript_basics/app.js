var userInput; // This is almost same as "let userInput;" or "let userInput: any"
var userInputAny;
var userName;
userInput = 5;
userInput = 'Max';
userInputAny = 'MaxAny';
// userName = userInput; // got an error
userName = userInputAny; // no error
if (userInput === 'string') {
    userName = userInput;
}
// Never type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured!', 500);
