class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    insertAtStart(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    insertAtEnd(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    isPalindrome() {
        if (!this.head || !this.head.next) {
            return true; // An empty list or a single node list is a palindrome
        }

        let left = this.head;
        let right = this.tail;

        while (left !== right && left.prev !== right) {
            if (left.value !== right.value) {
                return false;
            }
            left = left.next;
            right = right.prev;
        }

        return true;
    }

    print() {
        if (!this.head) {
            console.log('empty list');
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

// Example usage
const dl = new LinkedList();

const str = "racecar";
for (let char of str) {
    dl.insertAtEnd(char);
}

console.log("Original list:");
dl.print();

console.log("Is palindrome:", dl.isPalindrome());
