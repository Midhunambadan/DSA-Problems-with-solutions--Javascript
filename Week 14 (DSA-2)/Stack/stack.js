class Stack {
    constructor() {
        this.items = [];
    }

    // Adds an element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Removes and returns the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Returns the top element without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Checks if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Returns the number of elements in the stack
    size() {
        return this.items.length;
    }

    // Prints the elements in the stack
    printStack() {
        console.log(this.items.toString());
        
    }
}

// Example usage:
let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

// console.log(stack.peek());  // Output: 30
// console.log(stack.pop());   // Output: 30
// console.log(stack.size());  // Output: 2
stack.printStack();         // Output: 10,20
