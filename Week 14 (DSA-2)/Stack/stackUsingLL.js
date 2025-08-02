

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Stack{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    push(value){
        let node =new Node(value)
        if(!this.head){
            this.head=node
        }else{
            node.next=this.head
        }
        this.head=node
        this.size++
    }

    pop(){
        if(!this.head){
            console.log('Empty stack')
            return 
        }else{
            this.head=this.head.next
            this.size--
            return this.head.value
        }
    }

    middle(){
        if(!this.head){
            return null
        }
        let slow=this.head
        let fast=this.head
        while(fast&&fast.next){
            slow=slow.next
            fast=fast.next.next
        }
        return slow.value
    }

    midDelete(){
        if(!this.head){
            return null
        }
        
        let slow=this.head
        let fast=this.head
        let prev=null
        while(fast && fast.next){
            prev=slow
            slow=slow.next
            fast=fast.next.next
        }
        if(prev && slow){
            prev.next=slow.next
        }

    }

    reverse(){
        if(!this.head){
            console.log('Empty ')
        }

        let prev=null
        let curr=this.head
        while(curr){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }

    
    sum(){
        let sum= 0
        let curr = this.head
        while(curr!==null){
            sum += curr.value
            curr = curr.next
        }
        return sum
    }

    display(){
        if(!this.head){
            console.log('Empty')
        }else{
            let str=''
            let temp=this.head
            while(temp){
                str+=`${temp.value}`+' '
                temp=temp.next
            }
            console.log(str)
        }
    }

}


let stack=new Stack()

stack.push(10)
stack.push(13)
stack.push(16)
stack.push(19)

// stack.display()

// stack.pop()
// stack.display()

let mid=stack.middle()
stack.display()
console.log(mid)
stack.midDelete()
stack.display()

stack.reverse()
stack.display()

console.log(stack.sum())
