/*
给你一个整数数组 nums，和一个整数 k 。

对于每个下标 i（0 <= i < nums.length），将 nums[i] 变成 nums[i] + k 或 nums[i] - k 。

nums 的 分数 是 nums 中最大元素和最小元素的差值。

在更改每个下标对应的值之后，返回 nums 的最小 分数 。
 */

/*
解题核心，遍历分割位置i,i前全+k,i后全-k,找到最小的差值
 */

function smallestRangeII(nums: number[], k: number): number {

    function max(a:number, b:number):number{
        return a>b? a:b;
    }

    function min(a:number, b:number):number{
        return a<b? a:b;
    }

    if(k<0)
        k = -k;
    const _ = require('lodash');
    nums = _.sortBy(nums);
    const length = nums.length;
    
    let min_num:number = nums[0];
    let max_num:number = nums[length-1];
    let diff = max_num-min_num;

    for(let i:number = 0; i < length-1; i++){
        let a:number = nums[i];
        let b:number = nums[i+1];
        diff = min(diff, max(max_num-k,a+k) - min(min_num+k,b-k));
    }

    return diff;
};