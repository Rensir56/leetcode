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

function maxDepth(root: TreeNode | null): number {

    function max(a:number,b:number):number{
        return a>b? a:b;
    }

    function DFS(root: TreeNode | null, depth: number): number {
        if (root === null){
            return depth;
        } else {
            return max(DFS(root.left,depth+1),DFS(root.right,depth+1));
        }
    }

    return DFS(root,0);
};