function get_turtle_and_coins(coins: number[][]) {
    const n = coins.length - 1
    const m = coins[0].length - 1
    const dp: number[][] = Array(n + 1).fill(Array(m + 1).fill(0))
    for (let i = 0; i <= n; ++i) {
        for (let j = 0; j <= m; ++j) {
            if (i === 0 && j === 0) {
                dp[0][0] = coins[0][0]
            } else if (i === 0) {
                dp[0][j] = dp[0][j - 1] + coins[0][j]
            } else if (j === 0) {
                dp[i][0] = dp[i - 1][0] + coins[i][0]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + coins[i][j]
            }
        }
    }
    return dp[n][m]
}

console.log(get_turtle_and_coins(
    [
        [0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1],
        [0, 40, 70, 0, 0, 1],
        [100, 0, 0, 0, 0, 1]
    ]
))