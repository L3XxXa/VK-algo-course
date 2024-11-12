function jump(n: number, k: number) {
    const dp: number[] = []
    dp[0] = 1
    for (let i = 1; i <= n; ++i) {
        const r = Math.min(k, i)
        dp[i] = 0 
        for (let j = 1; j <= r; ++j) {
            dp[i] = dp[i] + dp[i-j]
        }
    }
    return dp[n]
}

console.log(jump(10, 1))