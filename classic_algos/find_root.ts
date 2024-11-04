function findRoot(a: number): number {
    let l = 0
    let r = a
    while (l <= r) {
        const middle = Math.floor((l + r) / 2)
        if (Math.pow(middle, 2) > a) {
            r = middle - 1
            continue
        } else if (Math.pow(middle, 2) < a) {
            l = middle + 1
            continue
        } else {
            return middle
        }
    }
    return r
}

console.log(findRoot(16))
console.log(findRoot(17))

