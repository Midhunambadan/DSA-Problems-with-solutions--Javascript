// //Linked List Questions
// // append,
// // prepend,
// // print,
// // insertByIndex
// // removebyIndex,
// // removeByvalue,
// // reverse,
// // removeDuplicates,
// // sum,
// //findMiddleElement and remove
// //search 
// //palindrome

// //using tail also do these operatio// removebyIndex,
// // removeByvalue,
// // insertByIndexns-------------------------------

// //Doubly linked list ask same as singly-----------------------------


// //----------------singly without tail-------------------------------------------------------

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.size=0
//         this.head=null
//     }

//     append(value){
//         let node=new Node(value)

//         if(!this.head){
//             this.head=node
//         }else{
//             let curr=this.head
//             while(curr.next){
//                 curr=curr.next
//             }
//             curr.next=node
//         }
//         this.size++
//     }

//     prepend(value){
//         let node=new Node(value)
//         if(!this.head){
//             this.head=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }

//     insertByIndex(value,index){
//         if(index<0||index>this.size){
//             return 
//         }
//         if(index==0){
//             this.prepend(value)
//         }else{
//             let node=new Node(value)
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next=prev.next
//             prev.next=node
//             this.size++
//         }
//     }
    
//     removeByIndex(index){
//         if(index<0||index>this.size){
//             return null
//         }

//         if(index==0){
//             let removeNode=this.head
//             this.head=removeNode.next
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             let removeNode=prev.next
//             prev.next=removeNode.next
            
//         }
//         this.size--
//     }

//     removeByValue(value){
//         if(this.head.value==value){
//             this.head=this.head.next
//             this.size--
//         }else{
//             let prev=this.head
//             while(prev.next&&prev.next.value!==value){
//                 prev=prev.next
//             }
//             if(prev.next){
//                 let removeNode=prev.next
//                 prev.next=removeNode.next
//                 this.size--
//             }
//             return null
//         }
//     }

//     reverse(){
//         if(!this.head){
//             return null
//         }else{
//             let prev=null
//             let curr=this.head
//             while(curr){
//                 let next=curr.next
//                 curr.next=prev
//                 prev=curr
//                 curr=next
//             }
//             this.head=prev
//         }
//     }

//     search(value){
//        if(!this.head){
//         return -1
//        }
//        let i=0
//        let curr=this.head
//        while(curr){
//         if(curr.value===value){
//             return i
//         }
//         curr=curr.next
//         i++
//        }

//     }

//     duplicate(){
//         let curr=this.head
//         while(curr&&curr.next){
//             if(curr.value===curr.next.value){
//                 curr.next=curr.next.next
//                 this.size--
//             }else{
//                 curr=curr.next
//             }
//         }
//     }

//     sum(){
//         let sum=0
//         let curr=this.head
//         while(curr){
//             sum+=curr.value
//             curr=curr.next
//         }
//         return sum
//     }

//     midElement(){
//         if(!this.head){
//             return null
//         }else{
//             let slow=this.head
//             let fast=this.head
//             while(fast&&fast.next){
//                 slow=slow.next
//                 fast=fast.next.next
//             }
//             return slow.value
//         }
//     }

//     delMidElement(){
//         if(!this.head){
//             return null
//         }else{
//             let slow=this.head
//             let fast=this.head
//             let prev=null
//             while(fast&&fast.next){
//                 prev=slow
//                 slow=slow.next
//                 fast=fast.next.next
//             }
//             if(prev&&slow){
//                 prev.next=slow.next
//             }
//         }
//     }

// fromArray(arr) {
//     arr.forEach(value => this.append(value));
// }

//     print(){
//         if(!this.head){
//             console.log('emmpty list');   
//         }else{
//             let str=''
//             let curr=this.head
//             while(curr){
//                 str+=`${curr.value}`+' '
//                 curr=curr.next
//             }
//             console.log(str);
            
//         }
//     }
// }


// const list=new LinkedList()

// list.append(1)
// list.append(2)
// list.append(3)
// list.append(4)
// list.append(5)
// list.append(5)


// // list.prepend(50)
// // list.print()

// // list.insertByIndex(300,2)
// // list.print()

// // list.removeByIndex(2)
// // list.print()

// // list.removeByValue(101)
// // list.print()

// // list.reverse()
// // list.print()

// // console.log(list.search(10));

// // list.duplicate()

// list.print()

// console.log(list.sum());

// console.log(list.midElement());

// list.delMidElement()
// list.print()



//----------------------------singly with tail-----------------------------------------



// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }


// class LinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }

//     append(value){
//         let node=new Node(value)
//         if(!this.head){
//             this.head=node
//             this.tail=node
//         }else{
//             this.tail.next=node
//             this.tail=node
//         }
//         this.size++
//     }

//     prepend(value){
//         let node=new Node(value)
//         if(!this.head){
//             this.head=node
//             this.tail=node
//         }else{
//             node.next=this.head
//             this.head=node

//         }
//         this.size++
//     }

//     insertByIndex(value,index){
//         let node=new Node(value)
//         if(index<0||index>this.size){
//             return 
//         }
//         if(index===0){
//             this.prepend(value)
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next=prev.next
//             prev.next=node
//             this.size++
//         }

//     }

//     removeByindex(index){
//         if(!this.head){
//             return null
//         }

//         if(index===0){
//             this.head=this.head.next
//             this.size--
//         }else{
//             let removeNode
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             removeNode=prev.next
//             prev.next=removeNode.next
//             this.size--
//         }
//     }

//     removeByValue(value){
//         if(!this.head){
//             return null
//         }

//         if(this.head.value===value){
//             this.head=this.head.next
//             this.size--
//         }else{
//             let prev=this.head
//             while(prev.next&&prev.next.value!==value){
//                 prev=prev.next
//             }
//             let removeNode=prev.next
//             prev.next=removeNode.next
//             this.size--
//         }
//     }

//     duplicate(){
        
//     }


//         removeFromEnd(){
//         if (this.isEmpty()) {
//             return null
//         }
//         const value = this.tail.value
//         if (this.size === 1) {
//             this.head = null
//             this.tail = null
//         } else {
//             let prev = this.head
//             while (prev.next !== this.tail) {
//                 prev = prev.next
//             }
//             prev.next = null
//             this.tail = prev
//         }
//         this.size--
//         return value
//     }

//     print(){
//         if(!this.head){
//             console.log('empty list')
//         }else{
//             let str=''
//             let curr=this.head
//             while(curr){
//                 str+=`${curr.value}`+' '
//                 curr=curr.next
//             }
//             console.log(str)
//         }
//     }
// }

// const list=new LinkedList()

// list.append(10)
// list.append(20)
// list.append(10)
// list.append(30)

// list.prepend(5)
// list.prepend(10)

// list.print()

// list.insertByIndex(200,2)
// list.print()

// // list.removeByindex(2)
// // list.print()

// list.removeByValue(200)
// list.print()



//-----------------------------Doubly linked list---------------------------------------------- 



// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//         this.prev=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.size=0
//         this.head=null
//         this.tail=null
//     }

//     insertAtStart(value){
//         let node=new Node(value)
//         if(!this.head){
//             this.head=node
//             this.tail=node
//         }else{
//             node.next=this.head
//             this.head.prev=node
//             this.head=node
//         }
//         this.size++
//     }


//     insertAtEnd(value){
//         let node=new Node(value)

//         if(!this.head){
//             this.head=node
//             this.tail=node

//         }else{
//             node.prev=this.tail
//             this.tail.next=node
//             this.tail=node
//         }
//         this.size++
//     }


//     print(){
//         if(!this.head){
//             console.log('empty string')
//         }else{
//             let str=''
//             let curr=this.head
//             while(curr){
//                 str+=`${curr.value}`+' '
//                 curr=curr.next
//             }
//             console.log(str)
//         }
//     }
// }

// const dl=new LinkedList()

// dl.insertAtStart(10)
// dl.insertAtStart(20)
// dl.insertAtStart(30)
// dl.insertAtStart(40)

// dl.print()

// dl.insertAtEnd(200)
// dl.insertAtEnd(500)
// dl.print()



//--------------BinarySearch-------------------------

// let arr=[1,2,3,4,5,6,7]

// let target=69

// function binarySearch(arr,target){

//     let left=0
//     let right=arr.length-1
//     while(left<=right){
//         let mid=Math.floor((left+right)/2)
//         if(target===arr[mid]){
//             return mid
//         }else if(target<arr[mid]){
//             right=mid-1
//         }else{
//             left=mid+1
//         }
//     }
//     return -1
// }

// console.log(binarySearch(arr,target))


//--------------Binary search using recursion---------------



// let arr=[10,20,30,40,50,60,71]
// let target=50

// function binarySearch(arr,target,left=0,right=arr.length-1){
  
//     if(left>right){
//         return -1
//     }

//     let mid=Math.floor((left+right)/2)

//     if(target===arr[mid]){
//         return mid
//     }else if(target>arr[mid]){
//         return binarySearch(arr,target,mid+1,right)
//     }else{
//         return binarySearch(arr,target,left,mid-1)
//     }
    
// }

// console.log(binarySearch(arr,target))


//-------------------------sort a linked list-------------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.size=0
        this.head = null;
        this.tail=null
    }

    append(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail=node
        } else {
            this.tail.next=node
            this.tail=node
        }
        this.size++
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
            console.log(str)
            return str
        }
    }
}
    
    

let list = new LinkedList();

let arr=[1,2,3,2,1]

for(let i=0;i<arr.length;i++){
    list.append(arr[i])
}


let forward=list.print()
console.log(forward,'fro')
list.reverse()

let backward=list.print()
console.log(backward,'back');

//


if(forward==backward){
    console.log('palindrome ')
}else{
    console.log('not palindrom')
}
