//给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值target的那两个整数，
//并返回它们的数组下标。
//你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。
//你可以按任意顺序返回答案。

// 解法1 暴力法
function twoSum1(nums: number[], target: number): number[] {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return [i,j]
            }
        }
    }
    return []
};

// 解法2 构建哈希表
function twoSum2(nums: number[], target: number): number[]|undefined {
    let map = new Map()
    for(let i=0;i<nums.length;i++){
        let diff = target - nums[i]
        if(map.has(diff)){
            return [i,map.get(diff)]
        }else{
            map.set(nums[i],i)
        }
    }
};