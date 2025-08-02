class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}

class LinkedList{
    constructor(){
        this.size=0
        this.head=null
        this.tail=null
    }

    insertAtEnd(value){
        let node=new Node(value)
        if(!this.head){
            this.head=node
            this.tail=node
        }else{
            node.prev=this.tail
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }

    isPalindrome(){}

    print(){
        if(!this.head){
            console.log('empty string')
        }else{
            let str=''
            let curr=this.head
            while(curr){
                str+=`${curr.value}`+' '
                curr=curr.next
            }
            console.log(str);
            
        }
    }

}

const list=new LinkedList()

list.insertAtEnd(10)
list.insertAtEnd(20)
list.print()

