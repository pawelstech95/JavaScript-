function multiplyBy(x, n = x) {

    console.log(arguments.length);

    arguments[1] = 10;

    return x * n;

}