
function changeBy(str,key){
     
    let newStr=''
     
     for(let i=0;i<str.length;i++){
        let charIndex =str.charCodeAt(i) + key
        
        
        if(charIndex<=122){
            newStr += String.fromCharCode( charIndex)
         
            
        }else{
            newStr+=String.fromCharCode (96+(charIndex%122))

            
        }

     }
     return newStr

}

console.log(changeBy('murshid',1));