class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtBeginning(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    
    insertAtEnd(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    display() {
        if(!this.head){
            console.log('emmpty')
        }else{
            let str=''
            let curr=this.head
            while(curr){
                str+=`${curr.data}`+' '
                curr=curr.next
            }
            console.log(str)
        }
        
    }
}

// Example usage
let dll = new DoublyLinkedList();

// dll.insertAtEnd(30);
// dll.insertAtEnd(40);
// dll.insertAtEnd(40)
dll.insertAtBeginning(10)
dll.display();  // Output: 20 10 30 40
   