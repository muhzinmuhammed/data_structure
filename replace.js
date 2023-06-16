// function replaceElements(index,value) {

//     arr = [1,2,3,45,5]

//     arr [index] =value
//     return arr
    
// }

// console.log(replaceElements(2,10));


// function a(nums) {

//     nums.sort()
//     console.log(nums);

//      for(let i=0;i<nums.length;i++){

//         if(nums[i]==nums[i+1]){
//           return true
//         }else{
//             return false
//         }
//     }

// }

// console.log(a([2,14,18,22,22]));


// function a(num1,num2) {

//   n=num1.length;
//   let b=[]
//   for (let i = 0; i < n; i++) {
//     for (let j =i+1 ; j < n; j++) {
//      if (num1[1]!=num2) {

//       b.push(num1)


      
//      }
      
//     }
    
//   }


  
// }

// console.log([1,2,3],[2,4,6]);
  

// let words=["bella","label","roller"]

// let a=parseInt(words)

// console.log(a);
var hasGroupsSizeX = function(deck) {


    let sample=new Set(deck)
    console.log(sample);
    var count=1
    for(i=0;i<sample.lenght;i++){

        if(sample.has(deck[i])){
                
         count++
        }
       

    }
    return count
    
};



console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1]));