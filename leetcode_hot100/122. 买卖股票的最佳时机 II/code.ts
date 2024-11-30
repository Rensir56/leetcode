//给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
//在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。
//你也可以先购买，然后在 同一天 出售。
//返回 你能获得的 最大 利润 。

// 思路：只关注两日之间的差价，只要差价为正，就可以获得利润
function maxProfit(prices: number[]): number {
    let res = 0;
    prices.forEach((_, i) => {
        if(prices[i + 1] && prices[i + 1] - prices[i] > 0) {
            res+= prices[i + 1] - prices[i]
        }
    })
    return res
};