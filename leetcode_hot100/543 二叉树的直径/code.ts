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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let max_length:number = 0;

    function max(a:number,b:number):number{
        return a>b? a:b;
    }

    function DFS(root: TreeNode | null, depth: number): number {
        if (root === null){
            return depth;
        } else {
            let l_depth:number = DFS(root.left,0);
            let r_depth:number = DFS(root.right,0);
            max_length = max(max_length,l_depth+r_depth);
            return 1+max(r_depth,l_depth);
        }
    }

    DFS(root,0)
    return max_length;
};