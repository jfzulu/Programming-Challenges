//WITHOUT RECURSION 
let fib = [0 , 1];
for (let i = 2; i< 10; i++){
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(fib);

//RECURSION
function fibonacci(n){
    if(n <= 1)
        return n;
    else
        return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(5));