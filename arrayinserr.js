function twoSum(target) {
arr =[1,5,2,3,4,10]
for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i]+arr[j]==target) {


                return  [arr[i],arr[j]]
               
            }
        }  
    }
}
console.log(twoSum(9));


