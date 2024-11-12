/**
 * В виде словаря: O(V + E)
 */
function dfs(graph: Map<string, string[]>, startVertice: string, visited: string[]) {
    visited.push(startVertice)
    for (const neighbour of graph.get(startVertice)) {
        if (!visited.includes(neighbour)) {
            dfs(graph, neighbour, visited)
        }
    }
    return visited
}

function bfs(graph: Map<string, string[]>, startVertice: string) {
    const visited: string[] = []
    const queue = [startVertice]
    while (queue.length > 0) {
        const vertex = queue.splice(0, 1)[0]
        if (!visited.includes(vertex)) {
            visited.push(vertex)
        }
        for (const neighbour of graph.get(vertex)) {
            if (!visited.includes(neighbour)) {
                queue.push(neighbour)
            }
        }
    } 
    return visited
}

const vertices = new Map<string, string[]>()
vertices.set('A', ['B', 'C'])
vertices.set('B', ['D', 'E'])
vertices.set('C', ['F'])
vertices.set('D', ['B'])
vertices.set('E', ['F', 'G'])
vertices.set('F', ['E',])
vertices.set('G', ['E'])
vertices.set('O', [])

const visitedVertices: string[] = []
console.log(dfs(vertices, 'A', visitedVertices))
console.log(bfs(vertices, 'A'))