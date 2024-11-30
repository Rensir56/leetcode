// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
//你可以假设数组是非空的，并且给定的数组总是存在多数元素。

// 解法1 O(n)时间 O(1)空间
// 思想：摩尔投票法，遍历数组，维护一个候选众数和一个计数器，如果遍历到的数和候选众数相同，计数器加一，
// 否则减一，当计数器为0时，更换候选众数为当前遍历到的数
function majorityElement1(nums: number[]): number {
    let cnt = 1
    let flag = nums[0]
    for (let i = 1; i < nums.length; i++) {
      if (!cnt) flag = nums[i]
      if (nums[i] == flag) {
        cnt++
      } else {
        cnt--
      }
    }
    return flag
  };

// 解法2 O(n)时间 O(1)空间
// 思想：排序后返回中位数
function majorityElement2(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let index:number = (nums.length / 2) >> 0 // to int
    return nums[index];
};