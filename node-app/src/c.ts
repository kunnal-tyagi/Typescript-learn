// create fn. isLegal() that return T or F if a user is above 18.
//IT takes user as input
interface User {
    firstname: string;
    lastname: string;
    age: number;
}

function isLegal(user: User): boolean {
    return user.age > 18;
}

// Example:
const person1: User = { firstname: "Kunnal", lastname: "Tyagi", age: 20 };
const person2: User = { firstname: "Riya", lastname: "Sharma", age: 16 };

console.log(isLegal(person1)); // true
console.log(isLegal(person2)); // false
