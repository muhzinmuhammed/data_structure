function facorial(n) {

    let result = 1

    for(let i=2;i<=n;i++){
        result =result*i
    }

    return result
    
}

console.log(facorial(5));