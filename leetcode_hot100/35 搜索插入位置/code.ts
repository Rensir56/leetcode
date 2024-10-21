/*
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。
 */

function searchInsert(nums: number[], target: number): number {
    let l:number = 0;
    let r:number = nums.length - 1;
    while(l <= r){
        let m:number = Math.floor((l+r)/2);
        if(nums[m] === target){
            return m;
        } else if (nums[m] < target) {
            l = m+1;
        } else {
            r = m-1;
        }
    }
    return l;
};