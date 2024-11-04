function binraySearch(arr: number[], element: number): number {
    let l = 0
    let r = arr.length - 1

    while (l <= r) {
        const middle = (l + r) / 2
        if (arr[middle] > element) {
            r = middle - 1
        } else if (arr[middle] < element) {
            l = middle + 1
        } else {
            return middle
        }
    }
    return l
}