const reverseString = function (str) {

    str = str.split('');
    str = str.reverse();
    str = str.join("");
    return str;


};

reverseString('hello there');

// Do not edit below this line
module.exports = reverseString;
