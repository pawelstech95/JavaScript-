function calculate(type, ...args) {

    // let args = [].slice.call(arguments, 1);

    let calculations = {
        sum: (prevVal, val) => prevVal + val,
        multiply: (prevVal, val) => prevVal * val
    };

    return args.reduce(calculations[type]);

}

console.log( calculate("sum", 2, 22, 3, 7, 13) );
console.log( calculate("multiply", 2, 22, 3, 7, 13) );