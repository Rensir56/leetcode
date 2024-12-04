//给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
//子数组是数组中元素的连续非空序列。

function subarraySum(nums: number[], k: number): number {
    let count = 0; // 计数器，记录符合条件的子数组数量
    let prefixSum = 0; // 当前前缀和
    let prefixSumMap = new Map<number, number>(); // 哈希表，存储前缀和及其频率

    // 初始化哈希表，前缀和为 0 的频率为 1
    // 这是为了处理从数组开头开始的子数组和为 k 的情况
    prefixSumMap.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i]; // 更新当前前缀和

        // 检查是否存在前缀和使得 prefixSum - k 在哈希表中
        if (prefixSumMap.has(prefixSum - k)) {
            count += prefixSumMap.get(prefixSum - k)!; // 增加计数器
        }

        // 更新哈希表，记录当前前缀和的频率
        if (prefixSumMap.has(prefixSum)) {
            prefixSumMap.set(prefixSum, prefixSumMap.get(prefixSum)! + 1);
        } else {
            prefixSumMap.set(prefixSum, 1);
        }
    }

    return count; // 返回符合条件的子数组数量
}