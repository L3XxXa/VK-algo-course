function dfs(graph: Map<string, string[]>, startVertice: string, visited: Map<string, boolean>, component: string[]) {
    visited.set(startVertice, true)
    component.push(startVertice)
    for (const neighbour of graph.get(startVertice)) {
        if (!visited.get(neighbour)) {
            dfs(graph, neighbour, visited, component)
        }
    }
}

function findComponents(graph: Map<string, string[]>, startVertice: string) {
    const visited = new Map<string, boolean>()
    for (const vertice of graph.keys()) {
        visited.set(vertice, false)
    }
    const connectedComponents = []
    for (const vertice of graph.keys()) {
        if (!visited.get(vertice)) {
            const component: string[] = []
            dfs(graph, vertice, visited, component)
            connectedComponents.push(component)
        }
    }
    return connectedComponents
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

console.log(findComponents(vertices, 'A'))