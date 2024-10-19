/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    let NoneZeroPtr:number = 0;
    for(let i:number = 0; i < nums.length; i++){
        if (nums[i] !== 0){
            nums[NoneZeroPtr] = nums[i];
            NoneZeroPtr++;
        }
    }
    for(let i:number = NoneZeroPtr; i < nums.length; i++){
        nums[i] = 0
    }
};