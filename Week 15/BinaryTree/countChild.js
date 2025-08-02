class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function countLeafNodes(node) {
    // Base case: if the node is null, return 0
    if (node === null) {
        return 0;
    }

    // If the node is a leaf, return 1
    if (node.left === null && node.right === null) {
        return 1;
    }

    // Otherwise, count the leaf nodes in both subtrees
    return countLeafNodes(node.left) + countLeafNodes(node.right);
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Leaf Node Count: " + countLeafNodes(root)); // Output: 3
