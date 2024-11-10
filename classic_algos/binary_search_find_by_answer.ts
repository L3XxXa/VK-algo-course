function binarySearchByAnswer(w: number, h: number, n: number) {
    let l = Math.max(w, h)
    let r = l * n

    while (l + 1 < r) {
        const middle = Math.floor((l + r) / 2)
        const res = (middle / w) * (middle / h)
        if (res < n) {
            l = middle
        } else if (res > n) {
            r = middle
        }
    }
    return r
}