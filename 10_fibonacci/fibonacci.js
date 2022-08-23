const fibonacci = function (arg) {

    // if (arg == 0) {
    //     return 0
    // }
    // if (arg == 1) {
    //     return 1
    // }

    // return fibonacci(arg - 1) + fibonacci(arg - 2)

    return arg < 0 ? 'OOPS' : arg == 0 ? 0 : arg == 1 ? 1 : fibonacci(arg - 1) + fibonacci(arg - 2)

};

// Do not edit below this line
module.exports = fibonacci;
