function reverseArray(a) {
    for(let i=0;i<Math.floor(a.length/2);i++){
        let temp=a[i]
        a[i]=a[a.length-i-1]
        a[a.length-i-1]=temp
    }
    return a
 
 }

 console.log(reverseArray[1,2,3,4,5]);