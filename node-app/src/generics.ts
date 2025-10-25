//lets say u have a fn. that will return the first element of array and that element 
//can be of any data type ex. int,string etc.
type imput=number | string;
function firstEl(val:imput[]){
    return val[0];
}
const temp=firstEl(["kunnal","tyagi"])
//console.log(temp.toUpperCase()); will give error bec. cnt apply to numbers

// Soln. is Generics,it enables you to create components that work with any data type
// while still providing compile type safety

//<T> defines any data type can come just define it when initializing
function anyt<T>(arg:T[]){
    return arg[0]!;
}
//telling <string> is optional it  can itself identify but then it will take various
//data types together
let ramp=anyt<string>(["kunnal","tyagi"]);
console.log(ramp.toUpperCase());
let shu=anyt<number>([1,2]);
console.log(shu);

