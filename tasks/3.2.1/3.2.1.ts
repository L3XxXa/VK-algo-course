function findMoreHalf(arr: number[]): number {
    const arrMap = new Map<number, number>()
    for (const item of arr) {
        const currentCount = arrMap.get(item) ?? 0
        if (currentCount + 1 > arr.length / 2) {
            return item
        } else {
            arrMap.set(item, currentCount + 1)
        }
    }
    return -1
}

console.log(findMoreHalf([7, 7, 8, 8, 8, 8, 9]))