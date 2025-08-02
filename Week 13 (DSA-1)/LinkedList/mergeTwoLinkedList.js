   
   
   class Node{
    constructor(value){
        this.value=value
        this.next=null
       
    }
   }
   
   class SinglyLinkedList{
    constructor(){
        this.size=0
        this.head=null
        this.tail=null
    }


    append(value){
        let node=new Node(value)
        if(!this.head){
            this.head=node
            this.tail=node
        }else{
            
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }

    merge(list) {
        if (list.size==0) {
            return null;
        }
        if (!this.head) {
            this.head = list.head
            this.tail = list.tail
        } else {
            this.tail.next = list.head
            this.tail = list.tail
        }
        this.size += list.size
    }


    print(){
        if(!this.head){
            console.log('empty list')
        }else{
            let str=''
            let curr=this.head
            while(curr){
                str+=`${curr.value}`+' '
                curr=curr.next
            }
            console.log(str)
        }
    }

   }


   const list=new SinglyLinkedList()
   const list1=new SinglyLinkedList()


   let arr= [1,2,69,3,4,5,6,]
   for(let i=0;i<arr.length;i++){
    list.append(arr[i])
   }

   list.print()
   
   
   let arr1=[7,8,9,10]
   for(let i=0;i<arr1.length;i++){
    list1.append(arr1[i])
   }
   list1.print()

   list.merge(list1)
   list.print()