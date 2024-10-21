function generate(numRows: number): number[][] {
    const dp: number[][] = new Array(numRows);

    for(let i:number=0;i<numRows;i++){
        dp[i] = new Array(i + 1); // 每一行的大小是 i + 1
        dp[i][0] = 1;
        dp[i][i] = 1;
        for(let j:number=1;j<i;j++){
            dp[i][j] = dp[i-1][j-1] + dp[i-1][j];
        }
    }

    return dp;
};