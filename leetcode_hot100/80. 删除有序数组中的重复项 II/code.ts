function removeDuplicates_up2(nums: number[]): number {
    for(let i:number = nums.length - 1; i > 0; i--){
        if(nums[i] == nums[i-1]){
            let cnt = 0;
            while(nums[i] == nums[i-1] && i > 0){
                i--;
                cnt++;
            }
            if(cnt >= 2) nums.splice(i,cnt-1);
        }
    }
    return nums.length;
};