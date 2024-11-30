function removeDuplicates(nums: number[]): number {
    for(let i:number = nums.length - 1; i > 0; i--){
        if(nums[i] == nums[i-1]){
            let cnt = 0;
            while(nums[i] == nums[i-1] && i > 0){
                i--;
                cnt++;
            }
            nums.splice(i,cnt);
        }
    }
    return nums.length;
};