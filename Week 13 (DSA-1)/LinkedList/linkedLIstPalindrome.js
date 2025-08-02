class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    isPalindrome() {
        let arr = [];
        let current = this.head;

        // Convert linked list to array
        while (current) {
            arr.push(current.value);
            current = current.next;
        }

        // Check if array is a palindrome
        for (let i = 0; i < arr.length / 2; i++) {
            if (arr[i] !== arr[arr.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
}

// Example usage
let list = new LinkedList();
list.append(1);
list.append(2);
// list.append(3);
list.append(1);

console.log( list.isPalindrome()); // Output: true
