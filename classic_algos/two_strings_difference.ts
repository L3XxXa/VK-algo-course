function twoStringDifference(a: string, b: string) {
    const map = new Map<string, number>([])
    for (let i of b) {
        if (map.has(i)) {
            map[i] += 1
        } else {
            map[i] = 1
        }
    }
    for (let i of a) {
        if (map.has[i]) {
            map[i] -= 1
        }
    }
    for (let i of map.keys()) {
        if (map[i] > 0) {
            return i
        }
    }
    return null
}

console.log(twoStringDifference('asd', 'bsd'))