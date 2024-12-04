//给你一个整数数组 nums，返回数组answer ，其中answer[i] 等于nums中除nums[i]之外其余各元素的乘积 。
//题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
//请 不要使用除法，且在 O(n) 时间复杂度内完成此题

// 思路1：前缀积和后缀积
function productExceptSelf1(nums: number[]): number[] {
    let len:number = nums.length;
    // use pre_prod and suf_prod
    let pre_prod:number[] = new Array(len+1).fill(1);
    let suf_prod:number[] = new Array(len).fill(1);
    for(let i:number = 1; i <= len; i++){
        pre_prod[i] = nums[i-1]*pre_prod[i-1];
    }
    for(let i:number = len - 2; i >= 0 ;i--){
        suf_prod[i] = nums[i+1]*suf_prod[i+1]
    }
    let res:number[] = new Array();
    for(let i:number = 0; i < len; i++){
        res.push(pre_prod[i] * suf_prod[i]);
    }
    return res;
};

// 思路2 双指针
const productExceptSelf = (nums: number[]): number[] => {
    const ans: number[] = Array(nums.length).fill(1)
    let left = 1
    let right = 1
    for (let i = 0; i < nums.length; i++) {
      ans[i] *= left
      ans[nums.length - 1 - i] *= right
      left *= nums[i]
      right *= nums[nums.length - 1 - i]
    }
    return ans
  }