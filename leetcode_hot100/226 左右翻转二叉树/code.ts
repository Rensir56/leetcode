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

function invertTree(root: TreeNode | null): TreeNode | null {

    function DFS(root: TreeNode | null){
        if (root === null){
            return;
        } else {
            let node: TreeNode | null = root.left;
            root.left = root.right;
            root.right = node;
            DFS(root.left);
            DFS(root.right);
        }
    }

    DFS(root);
    return root;
};