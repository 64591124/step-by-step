/**
 * @解法一 暴力递归
 * 
 */
function coinChange(coins, amount) {
  function dp(n) {
    if (n === 0) return 0
    if (n < 0) return -1
    let res = Infinity
    for (let i = 0; i < coins.length; i++) {
      let subProblem = dp(n - coins[i])
      // 子问题无效 直接跳过
      if (subProblem === -1) continue
      res = Math.min(res, subProblem + 1)
    }
    return res === Infinity ? -1 : res
  }
  return dp(amount)
}


/**
 * @解法二 记忆化dp
 */

function changeMoney(coins, amount) {
  let memo = []
  function dp(n) {
    if (memo[n]) return memo[n]
    if (n === 0) return 0
    if (n < 0) return -1
    let res = Infinity
    for (let i = 0; i < coins.length; i++) {
      let subProblem = dp(n - coins[i])
      if (subProblem === 0) {
        res = Math.min(res, subProblem+1)
      }
    }
    // 记录备忘录
    memo[n] = res === Infinity ? -1 : res
    return memo[n]
  }

  return dp(amount)
}



// dp数组迭代
function coinChange(coins: number[], amount: number): number {
  if (amount === 0) return 0;

  // 初始化数组 dp，因为要求最小值，则全部初始化为无穷大 Infinity
  let dp = Array(amount + 1).fill(Infinity);
  // 初始化，金额为 0 时，需要 0 枚硬币
  dp[0] = 0;

  // 循环遍历，依次计算金额 0 至 amount 的最优解
  for (let i = 0; i <= amount; i++) {
      // 对于每个金额 i 遍历面值 coins 的数组
      for (let j = 0; j < coins.length; j++) {
          // 子问题无效，直接跳过
          if (i - coins[j] < 0) continue;

          // i-coins[j]为剩余的钱 A，dp[i-coins[j]] = dp[A]，金额为 A 时，需要的硬币数目
          // dp[i] = Math.min(Infinity, 金额为 A 时需要的硬币数目 + 1);
          dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

