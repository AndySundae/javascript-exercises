const reverseString = function(string) {
    let converted = "";
    for(let i = string.length - 1; i >= 0; i--){
        converted += string[i]
    }
    return converted
};

// Do not edit below this line
module.exports = reverseString;
