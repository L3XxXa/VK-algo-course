function twoElementsSumNotSorted(values: number[], target: number): number[] | null {
    const cache = new Map<number, number>()
    for (let i = 0; i < values.length; ++i) {
        cache.set(values[i], i)
    }
    for (let i = 0; i < values.length; ++i) {
        const diff = target - values[i]
        if (cache.has(diff)) {
            return [i, cache.get(diff)!]  
        }
    }
    return null
}

console.log(twoElementsSumNotSorted([1, 2, 3, 4, 5, 1, 54, 2], 59))