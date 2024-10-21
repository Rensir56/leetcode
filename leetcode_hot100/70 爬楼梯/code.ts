/*
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 */

/*
要到达第 i 级楼梯，可以从第 i-1 级楼梯爬 1 级，或者从第 i-2 级楼梯爬 2 级。因此有：
𝑑𝑝[𝑖]=𝑑𝑝[𝑖−1]+𝑑𝑝[𝑖−2]
 */

function climbStairs(n: number): number {
    if (n===1)
        return 1;
    
    const dp:number[] = new Array(n+1);
    dp[0] = 1;
    dp[1] = 1;
    for(let i:number=2;i<=n;i++){
        dp[i] = dp[i-1]+dp[i-2];
    }
    return dp[n];
};