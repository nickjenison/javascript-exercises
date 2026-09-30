/*
Problem:
    Take two arguments that we will add from the first one until it reaches the second one 

Plan:
    Input: Two arguments for the function
    Output: Summation starting from first argument until the second
    
Pseudocode:
    let sum
    const placeholder
    if (a > b) {
        placeholder = a
        a = b
        b = placeholder
    }
    
    for i = a; i <= b; i++
        sum += a;
    

*/


const sumAll = function (a, b) {
    let sum = 0;
    let placeholder = 0;

    switch (true) {

        case a < 0 || b < 0:
            return "ERROR";
        case a % 1 !== 0 || b % 1 !== 0:
            return "ERROR";
        case a === typeof "string" || b === typeof "string":
            return "ERROR";
        default:
            break;
    }


    if (a > b) {
        placeholder = a;
        a = b;
        b = placeholder;
    }

    for (let i = a; i <= b; i++) {
        sum += i;
    }
    console.log(sum);
    return sum;
};

sumAll(4, -1);
// Do not edit below this line
module.exports = sumAll;
