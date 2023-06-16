function fiboonacci(n) { 

    const fib = [0,1]

    const val = 10

   

    for(let i=2;i<n;i++){
        fib[i] = fib[i-1]+fib[i-2]

    }

    console.log(val)

    
    return fib
    
}

console.log(fiboonacci(5));


// big o(n)