// create fn. isLegal() that return T or F if a user is above 18.
//IT takes user as input

// In TypeScript, an interface is a way to define the structure (shape)
//  of an object. It tells TypeScript what properties and methods an 
// object should have — including their types — but doesn’t actually
//  implement any functionality.
interface Person {
    firstname: string;
    lastname: string;
    age: number;
    //to make optional use ?
    email?:string,
    readonly networth:string
}

function isLegal(user: Person): boolean {
    return user.age > 18;
}

// Example:
const p1: Person = { firstname: "Kunnal", lastname: "Tyagi", age: 20,networth:"100" };
const p2: Person = { firstname: "Riya", lastname: "Sharma", age: 16 ,networth:"100"};

console.log(isLegal(p1)); // true
console.log(isLegal(p2)); // false
