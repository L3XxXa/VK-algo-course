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

function twoElementsSumSorted(arr: number[], target: number): number[] | null {
    let l = 0
    let r = arr.length - 1
    while (l <= r) {
        const sum = arr[l] + arr[r]
        if (sum === target) {
            return [l, r]
        } else if (sum < target) {
            l += 1
        } else {
            r -= 1
        }
    }
    return null
}

console.log(twoElementsSumSorted([1, 2, 3, 4, 5, 6, 7, 8, 9], 13))

console.log(twoElementsSumNotSorted([1, 2, 3, 4, 5, 1, 54, 2], 59))