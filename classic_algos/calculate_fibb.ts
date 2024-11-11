function naiveMethod(n: number) {
    if (n < 2) {
        return n
    }
    return naiveMethod(n - 1) + naiveMethod(n - 2)
}

const map = new Map<number, number>()

function dynamicMethod(n: number) {
    if (n < 2) return n
    if (n == 2) return 1
    if (map.has(n)) {
        return map.get(n)
    } else {
        const value = dynamicMethod(n - 1) + dynamicMethod(n - 2)
        map.set(n, value)
    }
    return map.get(n)
}

function moreDynamicMethod(n: number) {
    const res: number[] = []
    res[1] = 1
    res[2] = 1
    for (let i = 3; i <= n; ++i) {
        res[i] = res[i - 1] + res[i - 2]
    }
    return res[n]
}


console.log(naiveMethod(10))
console.log(dynamicMethod(10))
console.log(moreDynamicMethod(10))