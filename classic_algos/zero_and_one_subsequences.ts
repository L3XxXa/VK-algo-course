function calculate(subsequenceLength: number) {
    const dp = [1, 2]
    for (let i = 2; i <= subsequenceLength; ++i) {
        dp.push(dp[i - 1] + dp [i - 2])
    }
    return dp[subsequenceLength]
}

console.log(calculate(3))