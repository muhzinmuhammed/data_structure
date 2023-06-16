function addElement(index,value) {

    arr = [1,2,3,4,5]

    for (let i = arr.length; i >= index; i--) {

        arr[i] = arr[i-1]
        
        
    }

    arr[index] =value
    return arr
    
}

console.log(addElement(3,50));