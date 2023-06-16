class Node{
    constructor(value){

        this.value=value

        this.next=null

    }
   
}

class Linkedlist{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size==0
    }

    getSize(){
        return this.size
    }
    prepend(value){
        const node=new Node(value)
        if (this.isEmpty()) {
            this.head=node
            
        }else{
            node.next=this.head

            this.head=node
            this.size++
        }
       
    }
    append(value){

        const node=new Node(value)
        if (this.isEmpty()) {
            this.head=node
            
        }else{
          let  temp=this.head
            while (temp.next) {

                temp=temp.next

                
            }
            temp.next=node

        }
        this.size++

    }

    insert(value,index){
        if (index<0||index>this.size) {

            return
            
        }
        if (index==0) {

            this.prepend(value)
            
        }else{
            const node =new Node(value)
           let  curr =this.head

             for (let i = 0; i < index-1; i++) {
             curr=curr.next
                
             }

             node.next=curr.next

             curr.next=node
             this.size++



        }
    }remove(index){
        if (index<0||index>this.size) {

            return
            
        }
        let removeNode
        if (index==0) {

            removeNode=this.head
            this.head=this.head.next
   
        }
        else{

            let  curr =this.head

            for (let i = 0; i < index-1; i++) {
            curr=curr.next
               
            }
            removeNode=curr.next

            curr.next=removeNode.next


        }
        this.size--
       
    }
    reverse(){
        let prev=null
        let curr = this.head

        while (curr) {
let temp =curr.next
curr.next=prev
prev=curr
curr=temp

            
        }
        this.head=prev
    }

    print(){
        let listValues=''
        let curr=this.head

        while (curr) {

            listValues +=` ${curr.value} `
            curr = curr.next
           
            
        }
        console.log(listValues);

        
    }
    
}

const list=new Linkedlist()
list.prepend(9)
list.print()



list.append(100)
list.append(200)
list.append(100)
list.append(300)
list.reverse()
list.print()

