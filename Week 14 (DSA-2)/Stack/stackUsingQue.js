
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.push(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    front() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }

    size() {
        return this.items.length
    }
}
// q2 = []

// q1 = [3,2,1]
class StackUsingQueues {
    constructor() {
        this.queue1 = new Queue();
        this.queue2 = new Queue();
    }

    push(value) {
        this.queue2.enqueue(value);

        while (!this.queue1.isEmpty()) {
            this.queue2.enqueue(this.queue1.dequeue());
        }

        // Swap the names of queue1 and queue2
        let temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;
    }

    pop() {
        if (this.queue1.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        return this.queue1.dequeue();
    }

    top() {
        if (this.queue1.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        return this.queue1.front();
    }

    isEmpty() {
        return this.queue1.isEmpty();
    }

    print() {
        return this.queue1.items;
    }
}

// Example usage
let stack = new StackUsingQueues();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.print()); // [3, 2, 1]
console.log(stack.pop()); // 3
stack.push(4);
console.log(stack.print()); // [4, 2, 1]
console.log(stack.top()); // 4

