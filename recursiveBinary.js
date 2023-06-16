function binarySearch(arr,target) {

    return search(arr,target,0,arr.length-1)
    
}

function search(arr,target,head,tail) {
    if (head>tail) {

        return -1
   
    }
    let mid=Math.floor((head+tail)/2)
    if(arr[mid]==target) {

        return  mid+1
        
    }else if (arr[mid]< target) {
        return search(arr,target,mid+1,tail)
      
    }else{
        return  search(arr,target,head,mid-1)
    }
    
}

console.log(binarySearch([1,2,3,4,5],3));