//给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
//数组中的每个元素代表你在该位置可以跳跃的最大长度。
//判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。

// 思路：检验是否存在满足i == max_jump
// 这说明当前节点为0，且之前的所有节点都无法越过当前节点
function canJump(nums: number[]): boolean {
    
    function max(a:number,b:number):number{
        return a>b? a:b;
    }

    let max_jump:number = 0;
    for(let i:number = 0; i < nums.length-1; i++){
        max_jump = max(max_jump,i+nums[i]);
        if(i == max_jump)
            return false;
    }
    return true;
};