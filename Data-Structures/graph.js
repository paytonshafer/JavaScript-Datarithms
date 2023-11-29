// Simple undirected graph
class Graph {
    constructor(numVertices) {
        this.numVertices = numVertices;
        this.adjMatrix = Array.from({ length: numVertices }, () => Array(numVertices).fill(0));
    }

    addEdge(start, end) {
        if (start >= 0 && start < this.numVertices && end >= 0 && end < this.numVertices) {
            this.adjMatrix[start][end] = 1;
            this.adjMatrix[end][start] = 1;
        } else {
            throw new Error("Invalid vertices");
        }
    }

    bfs(vertex){
        const visited = Array(this.numVertices).fill(false)
        const queue = []

        visited[vertex] = true
        queue.push(vertex)

        while(queue.length !== 0){
            const current = queue.shift()
            console.log(current)

            // Loop through all vertexes connected to current
            for(let i = 0; i < this.numVertices; i++){
                if(this.adjMatrix[current][i] == 1 && !visited[i]){
                    visited[i] = true
                    queue.push(i)
                }
            }
        }
    }

    dfs(vertex){
        const visited = Array(this.numVertices).fill(false)
        const stack = []

        visited[vertex] = true
        stack.push(vertex)

        while(stack.length !== 0){
            const current = stack.pop()
            console.log(current)

            // Loop through all vertexes connected to current
            for(let i = 0; i < this.numVertices; i++){
                if(this.adjMatrix[current][i] == 1 && !visited[i]){
                    visited[i] = true
                    stack.push(i)
                }
            }
        }
    }

    printGraph() {
        console.log('   0 1 2 3')
        for (let i = 0; i < this.numVertices; i++) {
            console.log(i + ': ' + this.adjMatrix[i].join(' '));
        }
    }
}

const graph = new Graph(4);

graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 0);
graph.printGraph();
const text_graph = `
    0
   / \\
  3   1
   \\ /
    2 `
console.log(text_graph)

console.log('BFS traversal:')
graph.bfs(0)

console.log('DFS traversal:')
graph.dfs(0)