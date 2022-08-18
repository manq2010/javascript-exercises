const leapYears = function (...args) {

    if ((args % 400 == 0) || (args % 100 != 0) && (args % 4 == 0)) {
        return true
    } else {
        return false
    }

    // return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);    
};

// Do not edit below this line
module.exports = leapYears;


// A year is a leap year if the following conditions are satisfied:

// The year is a multiple of 400.
// The year is a multiple of 4 and not a multiple of 100.