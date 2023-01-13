"use strict";
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 200] = "READ_ONLY";
    Role[Role["AUTHOR"] = 201] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', "Cooking"],
    role: [2, 'author'],
    role2: Role.AUTHOR,
};
// person.role.push('admin');
// person.role[1] = 10; // error
// person.role = [0, 'admin', 'user']; // error
let favoriteActivities;
favoriteActivities = ['Sports', 'Sleeping'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // error
}
if (person.role2 === Role.AUTHOR) {
    console.log('is author');
}
