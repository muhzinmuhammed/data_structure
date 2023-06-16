class Node{
    constructor(value){
        this.value=value
        this.next = null
    }
}
class Linkedlist{
    constructor(){
        this.head = null
        this.size =0
    }

    isEmpthy(){
        return this.size==0
    }

    getsize(){
        return this.size
    }
    prepand(value){
        const node =new Node(value)
        if(this.isEmpthy()){
            this.head = node
        }
        else{
            node.next = this.head
            this.head =node
        }
        this.size++
       
    }

    append(value){
        const node =new Node(value)

        if(this.isEmpthy()){
            this.head = node
        }else{
           let prev = this.head
            while (prev.next) {

                prev = prev.next
                
            }
            prev.next = node
        }
        this.size ++


    }
    insert(value,index){
        if (index<0||index>this.size) {
            return
            
        }

        if (index==0) {

            this.prepand(value)
            
        }else{

            const node =new Node(value)
            let curr =this.head
            for (let i = 0; i < index-1; i++) {
                curr = curr.next
                
            }
            node.next=curr.next
            curr.next=node
            this.size++

        }
    }

    remove(index){

        if (index<0||index>this.size) {
            return
            
        }
let removeNode
        if (index==0) {

            removeNode = this.head
            this.head=this.head.next

           
            
        }else{
            let curr = this.head

            for (let i = 0; i < index-1; i++) {
               
                curr = curr.next
                
            }
            removeNode = curr.next
            curr.next =removeNode.next


        }
        this.size--
        
    }

    print(){
        if(this.isEmpthy()){
            console.log("empthy");
        }else{
          let  curr = this.head
         let   listvalues = ''
            while (curr) {
                listvalues +=` ${curr.value} `
                curr = curr.next
                
            }
            console.log(listvalues);
        }
    }

  
}

const list = new Linkedlist()
list.prepand(10)
list.print()

list.prepand(40)
list.print()

list.append(60)
list.print()
list.insert(50,1)
list.print()

list.insert(90,1)
list.print()

list.remove(1)
list.print()