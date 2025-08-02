
//Linked List Questions
// append,
// prepend,
// print,
// reverse,
// removeDuplicates,
// sum,
// removebyIndex,
// removeByvalue,
// insertByIndex
//findMiddleElement and remove
//search 
//palindrome

//using tail also do these operations

//Doubly linked list ask same as singly




class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    prepend(value){
        let node=new Node(value)

        if(!this.head){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    append(value){
        let node=new Node(value)
        if(!this.head){
            this.head=node
        }else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
             curr.next=node
        }
        this.size++
    }

    insertByIndex(value,index){
        if(index<0||index>this.size){
            return 
        }
        if(index==0){
            this.prepend(value)
        }else{
            let prev=this.head
            let node=new Node(value)
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++
        }
    }
    
removeByIndex(index){
    if(index<0||index>this.size){
        return null
    }
    let removeNode

    if(index==0){
        
        removeNode=this.head
        this.head=removeNode.next
    }else{
        let prev=this.head
        for(let i=0;i<index-1;i++){
            prev=prev.next
        }
        removeNode=prev.next
        prev.next=removeNode.next
    }
    this.size--
    return removeNode.value
    
}

removeByValue(value){
    let node=new Node(value)
    if(!this.head){
        return null
    }

    if(this.head.value==value){
        this.head=this.head.next
        this.size--
        return value
    }else{
        let prev=this.head
        while(prev.next&&prev.next.value!=value){
            prev=prev.next
        }

        if(prev.next){
            let removeNode=prev.next
            prev.next=removeNode.next
            this.size--
            return value
        }
        return null
    }
}


searchValue(value) {

    if (!this.head) {
        return -1;
    }

    let i = 0;
    let curr = this.head;
    while (curr) {
        console.log("hh ",curr.value)
        if (curr.value == value) {
            return i;
        }
        curr = curr.next;
        i++;
    }
    return -1;
}


reverse(){
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


// duplicates() {
//     let curr = this.head
//     while (curr && curr.next) {
//         if (curr.value === curr.next.value) {
//             curr.next = curr.next.next
//         } else {
//             curr = curr.next
//         }
//     }
// }

  
  removeDuplicates(){
    if(!this.head){
      return null
    }
    
    let curr=this.head
    let prev=null
    let seen=new Set()
    
    while(curr){
      if(seen.has(curr.value)){
        prev.next=curr.next
      }else{
        seen.add(curr.value)
        prev=curr
      }
      curr=curr.next
    }
    
    return
  }
  
  


sum(){
    if(!this.head){
        console.log(0);
    }else{
        let result=0
        let curr=this.head
        while(curr){
            result+=curr.value
            curr=curr.next
        }``

        console.log('sum =',result)
    }
}



    print(){
        if(!this.head){
            console.log('Empty list')
        }else{
            let curr=this.head
            let str=''
            while(curr){
                str+=`${curr.value}`+' '
                curr=curr.next
            }
            console.log(str)
        }
    }
}


let list=new LinkedList()

list.prepend(10)
list.prepend(50)
// list.print()

list.prepend(20)
// list.print()

list.prepend(50)
list.prepend(20)
// list.print()


// list.insertByIndex(22,3)
// list.print()

// list.removeByIndex(4)
// list.print()

// list.removeByValue(10)
// list.print()

// const index = list.searchValue(50)
// console.log("finded index :",index)
// list.print()

// list.reverse()
list.print()


list.removeDuplicates() 

list.print()


// list.sum()





//     merge(list) {
//         if (list.isEmpty()) {
//             return null;
//         }
//         if (this.isEmpty()) {
//             this.head = list.head
//             this.tail = list.tail
//         } else {
//             this.tail.next = list.head
//             list.head.prev = this.tail
//             this.tail = list.tail
//         }
//         this.size += list.size
//     }


//list.merge(list2)