/** 
 * Time: O(3 * N)
 */
function twoStringDifference(a: string, b: string) {
    const stringBMap: Map<string, number> = new Map()

    for (const i of b) {
        const curr = stringBMap.get(i) ?? 0
        stringBMap.set(i, curr + 1)
    }

    for (const i of a) {
        const curr = stringBMap.get(i)
        if (curr) {
            stringBMap.set(i, curr - 1)
        }
    }

    for (const item of stringBMap.keys()) {
        if (stringBMap.get(item)) {
            return item
        }
    }
    return null
}

/**
 * Time: O(2 * N)
 */
function twoStringDifferenceOptimized(a: string, b: string) {
    const stringAMap: Map<string, number> = new Map()

    for (const i of a) {
        const curr = stringAMap.get(i) ?? 0
        stringAMap.set(i, curr + 1)
    }

    for (const i of b) {
        const curr = stringAMap.get(i)
        if (curr) {
            stringAMap.set(i, curr - 1)
            if (curr - 1 === 0) {
                stringAMap.delete(i)
                continue
            }
            continue
        }
        return i
    }
    return null
}

console.log(twoStringDifference('abacaba', 'abababa'))
console.log(twoStringDifferenceOptimized('abacaba', 'abababa'))

  