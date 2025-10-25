//implement interface as class

interface axis{
    name:string,
    age:number,
    greet(phrase:string ):void
}

// In TypeScript, the keyword implements is used by a class to 
// guarantee that it follows the structure defined by an interface 
// (or multiple interfaces).
class Work implements axis{
    name: string;
    age: number;

    constructor(n:string,a:number){
        this.name=n,
        this.age=a
    }
    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`);
        
    }
}

const worker=new Work("kunnal",20);
worker.greet("Hello");