/**
 * Кузнечик прыгает между кочками
 */
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

/**
 * Собрать монетки на кочках
 */
function maxCoins(n: number, k: number, coins: number[]) {
    const dp: number[] = []
    dp[0] = 0
    for (let i = 1; i <= n + 1; ++i) {
        dp[i] = 0
        for (let j = 1; j <= Math.min(k, i); ++j) {
            dp[i] = Math.max(dp[i], dp[i - j] + coins[i - 1])
        }
    }
    return dp[n] 
}

function maxCoinsReturnRoute(n: number, k: number, coins: number[]) {
    const dp: number[] = []
    dp[0] = 0
    for (let i = 1; i <= n + 1; ++i) {
        dp[i] = 0
        for (let j = 1; j <= Math.min(k, i); ++j) {
            dp[i] = Math.max(dp[i], dp[i - j] + coins[i - 1])
        }
    }
    const maxCoins = dp[n]
    const jumps: number[] = []
    let i = n
    while (i > 0) {
        for (let j = Math.min(k, i); j > 0; --j) {
            if (dp[i] === dp[i - j] + coins[i - 1]) {
                jumps.push(i)
                i -= j
                break
            }
        }
    }
    const reversedJumps = jumps.reverse()
    return {
        maxCoins,
        jumps: reversedJumps
    }
}

console.log(jump(10, 1))
console.log(maxCoins(6, 2, [0, 4, 15, 9, -7, 0]))
console.log(maxCoinsReturnRoute(6, 2, [0, 4, 15, 9, -7, 0]))