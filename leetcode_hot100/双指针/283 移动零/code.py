class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        NoneZeroPtr = 0
        for i in range(0, len(nums)):
            if (nums[i] != 0):
                nums[NoneZeroPtr] = nums[i]
                NoneZeroPtr += 1
        for i in range(NoneZeroPtr, len(nums)):
            nums[i] = 0