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
要点，先序遍历的第一个节点是根节点，中序遍历的根节点左边是左子树，右边是右子树
进行递归，当轮递归返回结果为当轮根节点时
 */

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {

    let inorder_index:number[] = [];
    for (let i:number = 0; i < preorder.length; i++){
        inorder_index[inorder[i]] = i;
    }

    function build(pre_left: number, pre_right: number, in_left: number, in_right: number): TreeNode | null {
        if (pre_left > pre_right)
            return null;

        let node:TreeNode = new TreeNode(preorder[pre_left]);
        
        let index:number = inorder_index[preorder[pre_left]];
        let size_leftsubtree = index - in_left;

        node.left = build(pre_left+1,pre_left+size_leftsubtree,in_left, index - 1);
        node.right = build(pre_left+size_leftsubtree+1,pre_right,index + 1,in_right);

        return node;
    }

    return build(0, preorder.length - 1, 0, inorder.length - 1);
};