function recursionFibonacci(n){
    if(n<2){
        return n
    }

  return  recursionFibonacci(n-1) +   recursionFibonacci (n-2)
 

}

console.log(recursionFibonacci(6));
