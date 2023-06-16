function secondLarge(arr) {

   let i=0
   while (i<=arr.length-1) {

    for (let j = i+1; j < arr.length; j++) {
       if (arr[i]<arr[j]){
        let temp =arr[i]
        arr[i]=arr[j]
        arr[j]=temp
       }
      
    }
    i++ 
    
   }
   return arr[1]
    
}

console.log(secondLarge([6,3,5,9,1,2,7]))