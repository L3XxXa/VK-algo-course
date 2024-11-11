function pascalTriangle(column: number, row: number) {
    if (column === 0 || column === row) {
        return 1
    }
    return pascalTriangle(column - 1, row - 1) + pascalTriangle(column, row - 1)
}

function calculate(n: number) {
    const dp: number[][] = []
    for (let row = 0; row < n; ++row) {
        const currentRow: number[] = []
        for (let col = 0; col <= row; ++col) {
            currentRow.push(pascalTriangle(col, row))
        }
        dp.push(currentRow)
    }
    return dp
}

function modifiedCalculation(n: number) {
    const dp: number[][] = []
    for(let i = 1; i <= n; ++i) {
        const tmp = []
        for (let j = 1; j <= i; ++j) {
            tmp.push(1)
        }
        dp.push(tmp)
    }
    for (let row = 1; row < n; ++row) {
        for (let col = 1; col < row; ++col) {
            dp[row][col] = dp[row-1][col-1] + dp[row-1][col]
        }
    }
    return dp
}

console.log(calculate(4))
console.log(modifiedCalculation(4))