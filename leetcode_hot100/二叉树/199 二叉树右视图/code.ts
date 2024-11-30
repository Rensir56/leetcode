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

function rightSideView(root: TreeNode | null): number[] {

    const arr: number[] = [];
    let depth: number = 0;

    function RightView(root: TreeNode | null, s_depth: number) {
        if (root === null)
            return;
        if (s_depth >= depth) {
            arr.push(root.val);
            depth++;
        }
        RightView(root.right, s_depth+1);
        RightView(root.left, s_depth+1)
    }

    RightView(root,0);
    return arr;
};