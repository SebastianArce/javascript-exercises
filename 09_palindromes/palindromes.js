const palindromes = function (string) {
    let cleanString = string.split(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g).join('')
    cleanString = cleanString.toLowerCase()
    if (cleanString.split('').reverse().join('') == cleanString) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
