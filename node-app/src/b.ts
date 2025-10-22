//create a fn. that takes another fn. as input and 
//runs it after 1s

//only src gets committed
function mul(c:number,d:number):number{
    return c*d;
}

//syntax fn: ()=> void
function superset(fn:(a:number,b:number)=>number){
    setTimeout(()=>{
        const res=fn(2,3);
        console.log(res);
        
    },1000)
}
superset(mul)