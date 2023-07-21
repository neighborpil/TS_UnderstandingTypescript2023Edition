"use strict";
let appId = 'abc';
const button = document.querySelector('button');
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
function clickHandler(message, age) {
    console.log('Clicked!' + message + age);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'Your welcome!', 30));
}
//# sourceMappingURL=app.js.map