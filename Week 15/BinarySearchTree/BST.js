

class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BST{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root===null
    }

    insert(value){
        let node=new Node(value)

        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value<root.value){
            if(root.left==null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right==null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    search(root,value){
        if(!root){
            return 'not found'
        }

        if(value===root.value){
            return 'value found'
        }else if(value<root.value){
            return this.search(root.left,value)
        }else if(value>root.value){
            return this.search(root.right,value)
        }
    }

    inOrder1(root, values) {
        if (root) {
            this.inOrder1(root.left, values); 
            values.push(root.value);         
            this.inOrder1(root.right, values);
        }
    }


    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
            
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

//BFS
    levelOrder(){
        let queue=[]
        queue.push(this.root)
        // console.log('len',queue.length)
        while(queue.length){
            let curr=queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    minBST(root){
        if(!root.left){
            return root.value
        }else{
            return this.minBST(root.left)
        }
    }

    maxBST(root){
        if(!root.right){
            return root.value
        }else{
            return this.maxBST(root.right)
        }
    }


    closestValue(target) {
        let closest = Infinity;
        let temp = this.root;
        while (temp !== null) {
            if (Math.abs(temp.value - target) < Math.abs(closest - target) ) {
                closest = temp.value;
            }
            if (target < temp.value) {
                temp = temp.left;
            } else if(target>temp.value){
                temp = temp.right;
            }else{
                break
            }
        }
        return closest;
    }

    inOrder1(root, values) {
        if (root) {
            this.inOrder1(root.left, values); 
            values.push(root.value);         
            this.inOrder1(root.right, values);
        }
    }

    validatebst(){
        let values = []
        this.inOrder1(this.root,values)
        for(let i=1;i<values.length;i++){
            if(values[i]<=values[i-1]){
                return false
            }
        }
        return true
    }


    maxDepth(root){  // finding the maximum depth of the bst

        if(!root){
            return 0
        }else{

            let leftDepth=this.maxDepth(root.left)
            let rightDepth=this.maxDepth(root.right)
            return Math.max(leftDepth,rightDepth)+1
        }
    }


    findLCA(root,p,q){  // the lowest common ancestor of the tree

        if(!root){
            return null
        }

        if(p<root.value && q<root.value){

            return this.findLCA(root.left,p,q)
        }

        if(p>root.value && q>root.value){

            return this.findLCA(root.right,p,q)
        }

        return root

    }

secondMin(root){
    if(!root){
        return null
    }
    if(!root.right&&!root.left){
        return this.minBST(root.right)
    }
    let parent = null
    let current = root
    while(current.left){
        parent = current
        current = current.left
    }
    if(root.right){
        return this.minBST(root.right)
    }else{
        return parent.value
    }
}

secondMax(root){
    if(!root){
        return null
    }
    if(!root.left&&!root.right){
        return this.maxBST(root.left)
    }
    let parent = null
    let current = root
    while(current.right){
       parent = current
       current = current.right
    }
    if(root.left){
        return this.maxBST(root.left)
    }else{
        return parent.value
    }
}

countLeafNodes(root ) {
  if (root === null) return 0;

  if (!root.left && !root.right) {
    return 1; // this is a leaf node
  }

  return this.countLeafNodes(root.left) + this.countLeafNodes(root.right);
}

   
}

const bst=new BST()

// console.log('emtpy',bst.isEmpty())

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

// bst.postOrder(bst.root)

// console.log(bst.search(bst.root,3))
// 
bst.levelOrder()

// console.log("min",bst.minBST(bst.root))
// console.log("max",bst.maxBST(bst.root))


// console.log('closest value:',bst.closestValue(13))
// console.log('validate bst :',bst.validatebst())

// console.log(bst.secondMax(bst.root))
console.log('secondMin',bst.secondMin(bst.root))

























