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
要点：中序遍历输出升序数组，直接返回第k个元素即可
 */

function kthSmallest(root: TreeNode | null, k: number): number {
    const res:number[] = []
    
    function Inorder(root: TreeNode | null) {
        if (root == null)
            return;
        Inorder(root.left);
        res.push(root.val);
        Inorder(root.right);
    }

    Inorder(root);
    return res[k-1];

};