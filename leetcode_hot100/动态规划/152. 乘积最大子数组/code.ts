//给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续 子数组
//（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
//测试用例的答案是一个 32-位 整数。

function maxProduct(nums: number[]): number {
    let res:number = nums[0];
    let prod:number = 1;
    for(let i:number = 0; i < nums.length; i++){
        prod *= nums[i];
        res = Math.max(res,prod);
        if(nums[i] == 0){
            prod = 1;
        }
    }
    prod = 1;
    for(let i:number = nums.length-1; i >= 0; i--){
        prod *= nums[i];
        res = Math.max(res,prod);
        if(nums[i] == 0){
            prod = 1;
        }
    }
    return res;
};