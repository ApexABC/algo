function jumStep(n: number): number {
  // 初始化状态
  const dp: number[] = []
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}
// console.log(jumStep(2))
function bestPrice(prices: number[]): number {
  const n = prices.length
  const dp: number[] = []
  dp[0] = 0
  let minPrice = prices[0]
  for (let i = 1; i < n; i++) {
    // 当前位置 - 前一个最小值
    dp[i] = Math.max(prices[i] - minPrice, dp[i - 1])
    minPrice = Math.min(minPrice, prices[i])
  }
  return dp[n - 1]
}
console.log(bestPrice([7, 1, 5, 3, 6, 0, 4]))
