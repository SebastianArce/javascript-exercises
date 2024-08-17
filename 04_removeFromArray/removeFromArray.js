const removeFromArray = function(array, ...args) {
    for (let i=1; i < arguments.length; i++) {
        let valueToDrop = arguments[i]
        array = array.filter(a => a !== valueToDrop)
    }
    // console.log(arguments)
    // console.log(array)
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
