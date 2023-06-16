class Graph{
    constructor(){
        this.adjecencyList={}
        
    }
    addvertex(vertex){
        if (!this.adjecencyList[vertex]) {
            this.adjecencyList[vertex]=new Set()
            
        }
        
    }
    addEdge(vertex1,vertex2){
        if (!this.adjecencyList[vertex1]) {
            this.addvertex[vertex1]

            
        }
        if (!this.adjecencyList[vertex2]) {
            this.addvertex[vertex2]

            
        }

        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }

    removeEdge(vertex1,vertex2){
        
        this.adjecencyList[vertex1].delete(vertex2)
        this.adjecencyList[vertex2].delete(vertex1)

    }

    removeVertex(vertex){
        if (!this.adjecencyList[vertex]) {
            return null
            
        }

        for (const adjecencyList of this.adjecencyList[vertex]) {

            this.removeEdge(vertex,adjecencyList)
            
        }
        delete this.adjecencyList[vertex]
    }

    display(){
        for(let vertex in this.adjecencyList){
            console.log(vertex + "->"+[...this.adjecencyList[vertex]]);
        }
    }
    bfs(start){
       
        const queue = [start];
        const visited = {};
        visited[start] = true;
        const result = [];
        while(queue.length>0){
            const current = queue.shift();
            result.push(current)
            this.adjacencyList[current].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    queue.push(neighbor)
                }     
            });
        }
        return result
 }
}

const ss=new Graph()
ss.addvertex("A")
ss.addvertex("B")
ss.addvertex("C")
ss.addvertex("D")
ss.addEdge("A","B")
ss.display()


// console.log(ss.bfs("A"));