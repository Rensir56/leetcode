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

/*
要点：验证二叉搜索树需要验证3层节点的大小关系
 */

function isValidBST(root: TreeNode | null): boolean {

    function helper(root: TreeNode | null, lower: number, upper: number): boolean {
        if(root === null)
            return true;
        
        if (root.val <= lower || root.val >= upper)
            return false;

        return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
    }

    return helper(root, -Infinity, Infinity);
};