function twoSum(nums: number[], target: number): number[] {
    for(let i:number = 0; i < nums.length; i++){
        let diff:number = target - nums[i]
        for (let j:number = i+1; j < nums.length; j++){
            if (nums[j] === diff){
                return [i,j];
            }
        }
    }
    return []
};