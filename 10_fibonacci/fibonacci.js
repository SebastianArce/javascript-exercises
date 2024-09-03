const fibonacci = function(n) {
    // console.log(`Index: ${n}`)
    n = Number(n)
    if (n == 0) {
        return 0
    } else if (n < 0) {
        return "OOPS"
    } else if (n < 2) {
        return 1
    } else {
        let f0 = 0
        let f1 = 1
        let fn = f0 + f1
        for (let i = 2; i<n; i++) {
            f0 = f1
            f1 = fn
            fn = f0 + f1
            console.log(`fn: ${fn}, f0: ${f0}, f1: ${f1}`)
        }
        return fn
    }
};

// Do not edit below this line
module.exports = fibonacci;
