// 给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。
//每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:
//0 <= j <= nums[i] 
//i + j < n
//返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。

// 思路：贪心算法
function jump(nums: number[]): number {

    function max(a:number, b:number) : number {
        return a>b ? a:b;
    }

    let max_jump:number = 0;
    let next:number = 0;
    let cnt:number = 0;
    for(let i:number = 0; i < nums.length - 1; i++){
        max_jump = max(max_jump, nums[i] + i); // 当前一次跳跃最远距离

        if (i == next){ // 抵达最远点，进行下次跳跃
            next = max_jump;
            cnt++;
        }

    }
    return cnt;
};