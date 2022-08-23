const palindromes = function (arg) {

    // console.log(arg.slice(0,1).toLowerCase() === arg.split('').reverse().join('').slice(1,2))
    // console.log(arg.split('').reverse().join('').slice(1,2))
    //console.log((arg.slice(0, arg.length - 1)).toLowerCase())
    //console.log(arg.split('').reverse().join('').slice(1).toLowerCase())




// if (arg.split('').reverse().join('') === arg) {
//     return true
// }

// if (arg.slice(-1) === '!' && arg.split('').reverse().join('').slice(1) === arg.slice(0, arg.length - 1)){
//     return true
// }

// if (arg.slice(0,1).toLowerCase() === arg.split('').reverse().join('').slice(1,2) && arg.slice(0, arg.length - 1).toLowerCase() === arg.split('').reverse().join('').slice(1).toLowerCase()) {
//     return true
// }


// Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it

// const re = /[\W_]/g; // or re = /[^A-Za-z0-9]/g

// const lowRegStr = arg.toLowerCase().replace(re, '');
// console.log(lowRegStr)

// // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
// const reverseStr = lowRegStr.split('').reverse().join('');
// console.log(reverseStr)

// // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean

// return reverseStr === lowRegStr;

processedString = arg.toLowerCase().replace(/[^a-z]/g, "");
  return (
    processedString
      .split("")
      .reverse()
      .join("") == processedString
  );


};

// Do not edit below this line
module.exports = palindromes;


// The toLowerCase() method to return the calling string value converted to lowercase.

// The replace() method to return a new string with some or all matches of a pattern replaced by a replacement. We will use one of the RegExp we just created earlier.

// The split() method splits a String object into an array of strings by separating the string into sub strings.

// The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.

// The join() method joins all elements of an array into a string.