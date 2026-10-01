/*
Problem:
    Identify if the given year is a leap year. 
    A year is considered a leap year if,
    Disivible by 4
    Divisible by 100 only if it's divisible by 400 too, but if not then it's not considered

Plan:
    Input: Number of the year
    Output: Returning if it's a leap yr or not

Algo:
    If year % 4 == 0 but it's not divisible by 100, it's a leap year
    if a year % 100 == 0 AND year % 400 == 0, it's a leap year


*/

const leapYears = function(year) {

    if (year % 4 == 0 && year % 100 !== 0) {
        return true;
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
         


};

leapYears(2000);

// Do not edit below this line
module.exports = leapYears;
