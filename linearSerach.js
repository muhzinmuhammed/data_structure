function linearSearch(arr,target){
    for(let i=0;i< arr.length;i++){
        if(arr[i]==target){
            return i+1
        }
    }
    return -1
}
arr = [5,4,10,2,1]
console.log(linearSearch(arr, 10 ))
