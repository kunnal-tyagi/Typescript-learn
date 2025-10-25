//given  an array of +ve integers return maxvalue

function maxvalue(val: number[]): number | undefined {
    if (val.length === 0) return undefined;
// ! = non-null assertion operator → you tell TypeScript: 
// “I promise this value is not undefined.”   
   let maxi = val[0]! ; // guaranteed number
    for (let i = 1; i < val.length; i++) {
        if (val[i]!== undefined && val[i]! > maxi) maxi = val[i]!;
    }
    return maxi;
}


console.log(maxvalue([19, 2, 212, 7])); // 212
console.log(maxvalue([]));              // undefined
