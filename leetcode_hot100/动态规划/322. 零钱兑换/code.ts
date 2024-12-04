//给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
//计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
//你可以认为每种硬币的数量是无限的。


//动态规划
//dp[i]表示凑成金额i所需的最少硬币个数
//dp[i] = min(dp[i],dp[i-coins[j]]+1)
//时间复杂度O(n*amount)
//空间复杂度O(amount)
function coinChange(coins: number[], amount: number): number {
    let dp = new Array(amount+1).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] = Math.min(dp[j], dp[j-coins[i]]+1);
        }
    }
    return dp[amount] == Infinity ? -1 : dp[amount];
};