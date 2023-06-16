class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
    
}

class Linkedlist{
    constructor(){
    this.head=null
    this.size = 0
    }
    isEmpty(){

        return this.size==0
    
    }

    append(value){
        const node = new Node(value)
        if (this.isEmpty()) {

            this.head = node
            
        }
        else{
            let prev = this.head
            while (prev.next) {
                prev = prev.next
                
            }
            prev.next =node
        }
        this.size++
    }

    print(){
        if (this.isEmpty()) {
            console.log("empty");
            
        }else{
           let listvalues = ''
            let curr =this.head

            while (curr) {
                listvalues  +=` ${curr.value} `

                curr = curr.next
                
            }
            console.log(listvalues);
        }
    }

    susus(arr){
        let i = 0

       for ( i = 0; i < arr.length; i++) {
       this.append(arr[i])
        
       }
            
        
    }
}

const list =new Linkedlist()
list.susus([1,2,3,4,5,6,7])
list.print()