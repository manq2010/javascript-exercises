const ftoc = function (...value) {
  return Math.round(((value - 32) * 5 / 9)*10)/10

};

const ctof = function (...args) {
  return Math.round(((args * 9 / 5) + 32)*10)/10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

// var original=28.453

// 1.- round "original" to two decimals
// var result = Math.round (original * 100) / 100  //returns 28.45

// 2.- round "original" to 1 decimal
// var result = Math.round (original * 10) / 10  //returns 28.5

// 3.- round 8.111111 to 3 decimals
// var result = Math.round (8.111111 * 1000) / 1000  //returns 8.111
