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
给定一个二叉树的根节点 root ，和一个整数 targetSum ，
求该二叉树里节点值之和等于 targetSum 的 路径 的数目。
路径 不需要从根节点开始，也不需要在叶子节点结束，
但是路径方向必须是向下的（只能从父节点到子节点）。
 */

/*
策略：套两层dfs，第一层dfs遍历每个节点，第二层dfs计算以当前节点为根节点的路径和。
 */

function pathSum(root: TreeNode | null, targetSum: number): number {

    let res:number = 0;
    
    function dfs(root: TreeNode|null){
        if (!root)
            return;
        count(root,0);
        dfs(root.left);
        dfs(root.right);
    }

    function count(root: TreeNode|null,score:number){
        if(!root)
            return
        score += root.val;
        if(score === targetSum)
            res++;
        count(root.left,score);
        count(root.right,score);
    }

    dfs(root);
    return res;
};