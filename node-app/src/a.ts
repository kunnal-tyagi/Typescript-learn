const x: number=1;
console.log(x);
//let is only used for variable declarations, 
// not for function parameters.

function greeting( firstname:string){
    console.log("Hello"+firstname);
    }
greeting("Kunnal")
//implicitly all types are any
function ting( firstname:any){
    console.log("Hello"+firstname);
    }
ting(1)
ting({name:"kunnal"})
ting("shen")

//If you want to keep type safety but 
// allow multiple types, you can use a union type:
function ng(firstname: string | number) {
    console.log("Hello " + firstname);
}

//type inference-ts already knows fn. will return number
function sum(a:number,b:number):number{
    return a+b;
}
const m=sum(1,2);
console.log(m);
