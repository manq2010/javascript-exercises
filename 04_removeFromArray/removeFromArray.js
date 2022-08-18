// const removeFromArray = function (arr) {
//     // let index = arr.indexOf(check)
//     // if (index > -1){
//     //     arr.splice(index,1)
//     // }

//     // return arr

//     for (let i = 0; i < arguments.length; i++) {
//         let index = arr.indexOf(arguments[i])
//         // console.log(typeof arguments[i])
//         if (index > -1) {
//             arr.splice(index, 1)
//         }
//     }
// return arr
// };

function removeFromArray(array, ...args) {
    return array.filter(x => !args.includes(x))
};

// const removeFromArray = function (...args) {
//     const array = args[0]
//     return array.filter(val => !args.includes(val))
// }




// Do not edit below this line
module.exports = removeFromArray;

// arguments.length
// The number of arguments that were passed to the function.

// The arguments object is not an Array. It is similar, but lacks all Array properties except length. For example, it does not have the pop() method.

// However, it can be converted to a real Array:

// const args = Array.from(arguments);
// or
// const args = [...arguments];
// const args2 = [].slice.call(arguments);
// const args = Array.prototype.slice.call(arguments);

//Another Solution
// const removeFromArray = function (...args) {
//     // the very first item in our list of arguments is the array, we pull it out with args[0]
//     const array = args[0];
//     // create a new empty array
//     const newArray = [];
//     // use forEach to go through the array
//     array.forEach((item) => {
//       // push every element into the new array
//       // UNLESS it is included in the function arguments
//       // so we create a new array with every item, except those that should be removed
//       if (!args.includes(item)) {
//         newArray.push(item);
//       }
//     });
//     // and return that array
//     return newArray;
//   };