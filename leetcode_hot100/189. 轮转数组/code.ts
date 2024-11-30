//给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

// 解法1 空间复杂度O(1)
// 1. 先将整个数组反转
// 2. 再将前 k 个元素反转
// 3. 最后将剩余的元素反转
function rotate1(nums: number[], k: number): void {
    const n = nums.length;
    k = k % n; // 处理 k 大于数组长度的情况
    
    reverse(nums, 0, n - 1); // 反转整个数组
    reverse(nums, 0, k - 1); // 反转前 k 个元素
    reverse(nums, k, n - 1); // 反转剩余的元素
}

function reverse(nums: number[], start: number, end: number): void {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

// 解法2 空间复杂度O(n)
function rotate2(nums: number[], k: number): void {
    const n = nums.length;
    k = k % n; // 处理 k 大于数组长度的情况
    const rotated = new Array(n);
    
    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = nums[i];
    }
    
    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
}