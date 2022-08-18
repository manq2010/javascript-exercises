const sumAll = function (x, y) {

    let result = 0
    let lastNumber = y
    let firstNumber = x

    if (lastNumber < 0 || firstNumber < 0 || typeof (lastNumber) !== typeof (firstNumber)) {
        return 'ERROR'
    }

    if ((lastNumber > firstNumber)) {
        for (let i = firstNumber; i <= lastNumber; i++) {
            result += i
        }
    } else {

        lastNumber = x
        firstNumber = y
        for (let i = firstNumber; i <= lastNumber; i++) {
            result += i
        }
    }

    return result
};

// Do not edit below this line
module.exports = sumAll;


// To just compare types, one would think typeof would be the right tool

// typeof [] === typeof ['1','2','3']; // true, both are arrays


// Another Solution

// const sumAll = function(min, max) {
//     if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
//     if (min < 0 || max < 0) return "ERROR";
//     if (min > max) {
//       const temp = min;
//       min = max;
//       max = temp;
//     }
//     let sum = 0;
//     for (let i = min; i < max + 1; i++) {
//       sum += i;
//     }
//     return sum;
//   };