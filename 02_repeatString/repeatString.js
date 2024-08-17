const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR"
    }

    let concatenatedString = ""
    for (let i=0; i<num; i++) {
        concatenatedString += string
    }
    return concatenatedString;
};

// Do not edit below this line
module.exports = repeatString;
