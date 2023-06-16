class Node{
     
    constructor(value){
        this.value =value
        this.next =null
    }
  
}

class Linkedlist{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    isEmphty(){
        return this.size  == 0
    }

    getSize(){
        return this.size
    }
    prepend(value){
        const node =new Node(value)
        if(this.isEmphty()){
            this.head=node
            this.size++
        }else{
            node.next=this.head

            this.head=node
            this.size++
        }
       
    }

    append(value){
        const node =new Node(value)
        if(this.isEmphty()){
            this.head=node
        }else{
            let prev = this.head
            while (prev.next) {

                prev=prev.next
                
            }

           prev.next = node

        }

        this.size++
    }

    insert(value,index){
        if(index<0||index>this.size){
            return
        }

        if(index==0){
            this.prepend(value)
        }else{
            const node =new Node(value)
            let prev =this.head
            for(let i = 0;i<index -1;i++){
                prev=prev.next
            }
            node.next = prev.next
            prev.next=node
            this.size++
        }
    }

    removeForm(index){
        if(index<0||index>this.size){
            return null
        }let removeNode
        if(index==0){
            removeNode = this.head

            this.head=this.head.next

        }
        else{
            let prev =this.head

            for(let i=0;i<index-1;i++){
                prev=prev.next
            }

            removeNode=prev.next

            prev.next=removeNode.next
        }

        this.size--

        return removeNode
    }

    search(value){
        if(this.isEmphty()){
            return-1
        }

        let i=0
        let curr=this.head

        while (curr) {
            if(curr.value==value){
                return i
            }
            curr=curr.next
            i++
            
        }

        return -1
    }

    reverse(){
        let prev = null
        let curr = this.head
        while (curr) {

           let temp=curr.next

           curr.next=prev

           prev = curr
           curr = temp
            
        }
        this.head =prev
    }

    middleValue(){

       let fast=this.head
       let small=this.head
       while (fast&&fast.next) {

       
        small=small.next
         fast=fast.next.next
        
       }
      console.log(small.value);
      
       

        
    }

    middleValueDeltion(){

        let fast=this.head
        let small=this.head
        let prev
        while (fast&&fast.next) {
 
         prev=small
         small=small.next
          fast=fast.next.next
         
        }
        prev.next=small.next
       
       
        
 
         
     }

     stringToList(str){
        let i=0
        for ( i = 0; i < str.length; i++) {
           this.append(str[i])
        }
        
        
      }

     



     
     



  getIndex(index){
    let i=0
    let curr = this.head
    while (curr) {

        if (i==index) {

            console.log(`data at index ${index} : ${curr.value}`);


            
        }

        curr=curr.next
        i++
        
    }
    return
  }

  

  arrayToList(arr){
   
    for ( let i = 0; i < arr.length; i++) {
       this.append(arr[i])
        
    }
  }
   duplicateDelete(){
    let curr = this.head
    while (curr!==null) {

        let temp = curr.next

        while (temp!=null&&temp.value==curr.value) {
            temp=temp.next
        }

        curr.next=temp
        if (temp==this.tail && curr.value == this.next) {
            this.tail=curr
            this.tail.next = null
            
        }
        curr=temp

        
    }
   }


  
   


    print(){
        if(this.isEmphty()){
            console.log("Empthy")

        }else{
            let curr=this.head
            let listValues=''
            while (curr) {

                listValues+=` ${curr.value} `

                curr=curr.next
                
            }
            console.log(listValues)
        }
    }
}


function  decimaltobinray(decimal){
    
    let binary  =''
    let binaryorg = ''
    while (decimal>0 ) {
        binary +=decimal%2
       
        decimal=Math.floor(decimal/2)
    }
    for (let i = binary.length-1; i >=0 ; i--) {

        binaryorg += binary[i]
        

        
    }
    return binaryorg

} 



console.log(decimaltobinray(100));


const list = new Linkedlist()


// list.prepend(10)
// list.prepend(20)
// list.prepend(40)
// list.prepend(50)
// list.prepend(60)
// list.prepend(60)


// list.print()
// list.duplicateDelete()
// list.print()

// list.middleValueDeltion()
// list.print()



// list.palindrome('malayalam')
// list.palindrome('Ejas')


// list.stringToList('hello')
// list.print(9)




//list.middleValue();
//list.print()












 




 







// list.reverse()
// list.print()
