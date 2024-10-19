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

function isSymmetric(root: TreeNode | null): boolean {
    
    function isSame(left: TreeNode | null, right: TreeNode | null): boolean {
        if(!left && !right){
            return true;
        } else if (left && right) {
            if (left.val !== right.val)
                return false;
            return isSame(left.left,right.right) && isSame(left.right, right.left);
        } else {
            return false;
        }
    }

    return isSame(root.left,root.right);
};