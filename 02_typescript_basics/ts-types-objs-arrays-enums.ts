const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

enum Role { ADMIN = 'ADMIN', READ_ONLY = 200, AUTHOR};

const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string], // tuple
    role2: Role,
} = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', "Cooking"],
    role: [2, 'author'],
    role2: Role.AUTHOR,
};

// person.role.push('admin');
// person.role[1] = 10; // error

// person.role = [0, 'admin', 'user']; // error

let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Sleeping']

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // error
}

if (person.role2 === Role.AUTHOR) {
    console.log('is author');
}