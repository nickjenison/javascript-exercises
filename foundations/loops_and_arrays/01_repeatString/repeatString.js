/*
Problem:  
    Provide an argument string that we will repeat based on the input number we provided

Plan:
    Input - string, number of repetitions
    Output - string that's been repeated depending on the input

    Constraints:
        If the n provided is negative, throw an error

Algo:
    declare the arr holder for the output
    Put the string to the arr holder
    Create a for loop that ends with the n
        arr.push(str)
    
    Print arr
*/
const repeatString = function (str, n) {
    let arr = [];

    if (n < 0) {
       return 'ERROR';
    }
    else {
         for (let i = 0; i < n; i++) {
            arr.push(str);
        }
        arr = arr.join("");
        return arr;
    }



};

let result = repeatString("hey", -1)
console.log(result);
// Do not edit below this line
module.exports = repeatString;
