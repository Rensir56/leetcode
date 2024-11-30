/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedArrayToBST(nums: number[]): TreeNode | null {
    
    function BST(nums: number[], left:number, right:number): TreeNode | null {
        if (left > right) {
            return null;
        }

        let mid: number = Math.floor((left + right) / 2);
        
        let node:TreeNode | null = new TreeNode(nums[mid]);
        node.left = BST(nums,left,mid-1);
        node.right = BST(nums,mid+1,right);
        return node;
    }

    return BST(nums,0,nums.length-1);
};