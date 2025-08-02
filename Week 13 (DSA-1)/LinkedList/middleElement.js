class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    prepend(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

 
    middleElement() {
        if (!this.head) {
            return null;
        }
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow.value;
    }



    deletemiddle(){
    if(!this.head){
        return null
    }
    let slow = this.head
    let fast = this.head
    let prev = null
    while(fast!==null&&fast.next!==null){
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }
    if(prev!==null&&slow!==null){
        prev.next= slow.next
    }
}


    print() {
        if (!this.head) {
            console.log('Empty list');
        } else {
            let str = '';
            let curr = this.head;
            while (curr) {
                str += `${curr.value} `;
                curr = curr.next;
            }
            console.log(str);
        }
    }
}

let list = new LinkedList();

list.prepend(40);
list.prepend(30);
list.prepend(20);
list.prepend(10);

list.print();

let res = list.middleElement();
console.log(res);

let midDel=list.deletemiddle()
// console.log(midDel)
list.print()