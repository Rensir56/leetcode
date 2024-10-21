/*
给你一个整数数组 nums，和一个整数 k 。
在一个操作中，您可以选择 0 <= i < nums.length 的任何索引 i 。将 nums[i] 改为 nums[i] + x ，
其中 x 是一个范围为 [-k, k] 的任意整数。对于每个索引 i ，最多 只能 应用 一次 此操作。
nums 的 分数 是 nums 中最大和最小元素的差值。 
在对  nums 中的每个索引最多应用一次上述操作后，返回 nums 的最低 分数 。
 */

function smallestRangeI(nums: number[], k: number): number {
    let diff:number = k;
    if (diff < 0)
        diff = -diff;
    let max:number = nums[0];
    let min:number = nums[0];
    for(let i:number = 1; i < nums.length; i++){
        if(nums[i] < min){
            min = nums[i];
        }

        if(nums[i] > max){
            max = nums[i];
        }
    }
    if (max - min > 2 * diff){
        return max - min - 2*diff;
    } else {
        return 0;
    }
};