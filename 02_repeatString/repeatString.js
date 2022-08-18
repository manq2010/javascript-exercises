const repeatString = function(stringValue, stringLength) {
    let result = ''
    for (let i = 0; i < stringLength; i++ ){
        result += stringValue
    }

    if (stringLength < 0){
        return 'ERROR'
    }
return result
};



// Do not edit below this line
module.exports = repeatString;

