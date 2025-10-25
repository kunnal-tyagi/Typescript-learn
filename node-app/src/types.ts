type person={
    name:string,
    age:number
}

// interface user=string |number;
type user=string | number;
function greetID(phrase: user){
    console.log(phrase);
    
}

greetID(10);
greetID("hello");

type int={
    name:String
}
interface pen{
    age:number
}
type s=int &pen;
function teamlead(role:s){
    console.log(`Name:${role.name} Age:${role.age}`);
    
}
const leader={name:"kunnal",age:18};
teamlead(leader);