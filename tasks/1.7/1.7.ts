function lastChecked(parcels: number[], n: number): number {
    const stack: number[] = []
    for (let i = 0; i < n; ++i) {
        if (parcels[i] % 2 === 0) {
            stack.push(parcels[i])
        }
    }

    if (stack.length > 0) {
        return stack[stack.length - 1]
    }
    return -1
}