/*
Problem:
    Input an argument of number that will compare it and remove that similar number inside an array
    Return the final modified array 

Plan:
    Input - Array Values, Random Number
    Output - New set of values that removede the random number inside the array

Pseucocode:
    Create the argument array and the number variable to n
    Use the filter method to remove the n inside the array
    return the modified array

    Prob 1:
        How do I make the function take arguments optionally where if wala sya, i'll just use the given but it's preprared to take more and do the same job 
    Prob 2:

*/
const removeFromArray = function (...arr) {

    let filtered = [];

    filtered = arr[0].filter((num) => num !== arr[1] && num != arr[2] && num != arr[3] && num != arr[4]);
    console.log(filtered);
    return filtered;

};

removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);

// Do not edit below this line
module.exports = removeFromArray;
