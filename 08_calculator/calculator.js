const add = function (...args) {

  return args[0] + args[1]
};

const subtract = function (...args) {
  return args[0] - args[1]
};

// const sum = function (args) {
//   //console.log(args)
//   const result = args.reduce((prev, cur) => prev + cur, 0)
//   return result
// }

const sum = (args) => { return args.reduce((prev, cur) => prev + cur, 0) }


// const multiply = function (args) {
//   const result = args.reduce((prev, cur) => prev * cur)
//   return result
// };

const multiply = (args) => { return args.reduce((prev, cur) => prev * cur) };

const power = (...args) => { return Math.pow(args[0], args[1]) };

// const factorial = (value) => {
//   if (value == 0 || value == 1) {
//     return 1
//   } else {
//     let result = 1
//     for (let i = 1; i <= value; i++) {
//       result *= i
//       // console.log(sum)
//     }
//     return result
//   }

// };

const factorial = (value) => { return value == 0 || value == 1 ? 1 : factorial(value - 1) * value };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
