class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
    this.print();
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    while (
      this.hasParent(currentIndex) &&
      this.heap[currentIndex] < this.heap[this.getParentIndex(currentIndex)]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  removeMin() {
    if (this.heap.length === 0) {
      throw new Error("Heap is empty");
    }
    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return minValue;
  }

  heapifyDown() {
    let currentIndex = 0;
    while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(currentIndex);
      if (
        this.getRightChildIndex(currentIndex) < this.heap.length &&
        this.heap[this.getRightChildIndex(currentIndex)] <
          this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = this.getRightChildIndex(currentIndex);
      }

      if (this.heap[currentIndex] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(currentIndex, smallerChildIndex);
      }

      currentIndex = smallerChildIndex;
    }
  }

  print() {
    console.log(this.heap);
  }
}

const heap = new MinHeap();
heap.insert(10);
heap.insert(5);
heap.insert(20);
heap.insert(3);

// console.log(heap.getLeftChildIndex(0));

// heap.swap(0,2)

heap.print();

// console.log(heap.hasParent(0))

console.log("Removed min value:", heap.removeMin());
// console.log("Removed min value:", heap.removeMin());
heap.print();
