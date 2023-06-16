function binarySearch(arr,x) {

    let head=0
    let end=arr.length-1

    while (head<=end) {
        let mid= Math.floor((head+end)/2)

        if (arr[mid]==x) {

            return mid+1
            
        }else if(arr[mid]<x){
            head=mid+1
        }else{
            end=mid-1
        }
        
    }
    
    
}

console.log(binarySearch([1,2,3,4,5],5));

