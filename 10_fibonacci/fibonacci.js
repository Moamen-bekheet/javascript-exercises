const fibonacci = function fibonacci(nthFibonacci) {
    if(parseInt(nthFibonacci)<=0)return 'OOPS';
    if (parseInt(nthFibonacci)===1 || parseInt(nthFibonacci)===2){
        return 1;}
    return fibonacci(nthFibonacci-1)+fibonacci(nthFibonacci-2);
};

// Do not edit below this line
module.exports = fibonacci;
