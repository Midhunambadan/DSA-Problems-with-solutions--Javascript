// implementation of an Undirected Graph using an Adjacency List

class Graph{    
    constructor(){
        this.adjacencyList={}
        
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1,vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){

        if(!this.adjacencyList[vertex]){
            return 
        }

        for(let adjacencyVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacencyVertex)
        }

        delete this.adjacencyList[vertex]
    }


  //Breadth first search algorithm
    bfs(start){              

        let queue=[start]
        
        let visited=new Set([start])

        while(queue.length>0){

            let vertex=queue.shift()
            console.log(vertex)

            for(let neighbor of this.adjacencyList[vertex]){

                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }
    }


    // Depth first search Algorithm

    dfs(start){         
        let stack=[start]
        let visited= new Set([start])

        while(stack.length>0){

            let vertex=stack.pop()
            console.log(vertex)


            for(let neighbor of this.adjacencyList[vertex]){

                if(!visited.has(neighbor)){

                    visited.add(neighbor)
                    stack.push(neighbor)
                }
            }
        }
    }

    


    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+'=>'+[...this.adjacencyList[vertex]]);
            
        }
    }
}

const graph=new Graph()
const graph1=new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A','B')
graph.addEdge('B','C')

graph.display()

console.log(graph.hasEdge('B','A'));


// graph.removeEdge('A','B')

// graph.removeVertex('B')
// graph.display()


// graph.bfs("B")
// console.log('-')
// graph.dfs('B')









// Great question, Midhun! There are **three primary ways** to represent a graph in programming, and each has its use cases based on the graph type (sparse vs. dense, directed vs. undirected, weighted vs. unweighted).

// ---

// ## ✅ 1. **Adjacency List** (What you're using now)

// ### ➕ Advantages:

// * Efficient for **sparse graphs** (fewer edges).
// * Takes **less space**: `O(V + E)` where V = vertices, E = edges.
// * Easy to find all neighbors of a vertex.

// ### ➖ Disadvantages:

// * Slower to check if an edge exists between two specific vertices (`O(degree)` time).

// ---

// ## ✅ 2. **Adjacency Matrix**

// ### 🔧 Structure:

// A `2D array` (matrix) of size `V x V`. If `graph[i][j] = 1`, there’s an edge from vertex `i` to `j`.

// ### ➕ Advantages:

// * Fast to check if an edge exists between two vertices: `O(1)`.
// * Easy to implement and understand.
// * Good for **dense graphs** (lots of edges).

// ### ➖ Disadvantages:

// * Takes **more space**: `O(V^2)`, even if there are few edges.
// * Traversing neighbors is slower: `O(V)` per node.

// ### 🧠 Example:

// ```js
// const matrix = [
//   [0, 1, 1],  // A -> B, C
//   [1, 0, 1],  // B -> A, C
//   [1, 1, 0],  // C -> A, B
// ];
// ```

// ---

// ## ✅ 3. **Edge List**

// ### 🔧 Structure:

// Just a list of all edges in the form of tuples or arrays.

// ```js
// const edgeList = [
//   ['A', 'B'],
//   ['A', 'C'],
//   ['B', 'C']
// ];
// ```

// ### ➕ Advantages:

// * Very simple and minimal structure.
// * Good for **algorithms that only care about edges** (like Kruskal’s MST).

// ### ➖ Disadvantages:

// * Slower for neighbor or connectivity lookups (`O(E)`).
// * Not efficient for traversals.

// ---

// ## ✅ Summary Comparison Table:

// | Method               | Space Complexity | Edge Lookup | Neighbor Lookup | Best For           |
// | -------------------- | ---------------- | ----------- | --------------- | ------------------ |
// | **Adjacency List**   | `O(V + E)`       | `O(degree)` | `O(degree)`     | Sparse Graphs      |
// | **Adjacency Matrix** | `O(V^2)`         | `O(1)`      | `O(V)`          | Dense Graphs       |
// | **Edge List**        | `O(E)`           | `O(E)`      | `O(E)`          | Edge-focused algos |

// ---

// ### 💡 Bonus: Weighted Graphs

// For weighted graphs, all 3 methods can be extended:

// * **Adjacency List:** Store `{vertex, weight}` instead of just vertex.
// * **Adjacency Matrix:** Store weight value instead of `1`, and use `Infinity` or `0` if no edge.
// * **Edge List:** Each edge becomes a triplet: `[u, v, weight]`.

// ---

// Let me know if you want working code for each representation, or how to convert between them.
