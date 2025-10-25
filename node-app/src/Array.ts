//given  an array of +ve integers return maxvalue

function maxvalue(val:number[]){
    let maxi=0;
    for(let i=0;i<val.length;i++){
        if(val[i]>maxi) maxi=val[i];
    }
    return maxi;
}
console.log(maxvalue([19,2,212,7]));
