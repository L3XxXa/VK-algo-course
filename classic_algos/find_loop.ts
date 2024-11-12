function dfs(graph: Map<string, string[]>, startVertice: string, visited: string[], parentVertice: string) {
    visited.push(startVertice)
    for (const neighbour of graph.get(startVertice)) {
        if (neighbour != parentVertice) {
            if (visited.includes(neighbour) || dfs(graph, neighbour, visited, startVertice)) {
                return true
            }
        }
    }
    return false
}

function findLoop(graph: Map<string, string[]>) {
    const visited: string[] = []
    for (const vertex of graph.keys()) {
        if (!visited.includes(vertex)) {
            if (dfs(graph, vertex, visited, null)) {
                return true
            }
        }
    }
    return false
}

const vertices = new Map<string, string[]>()

vertices.set('A', ['B', 'C'])
vertices.set('C', ['D', 'E'])
vertices.set('B', [])
vertices.set('D', [])
vertices.set('E', [])
console.log(findLoop(vertices))