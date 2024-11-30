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

/**
 Do not return anything, modify root in-place instead.
 */

/*
给你二叉树的根结点 root ，请你将它展开为一个单链表：
展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
展开后的单链表应该与二叉树 先序遍历 顺序相同。
 */

function flatten(root: TreeNode | null): void {
  if (!root) return;

  function preOrder(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    preOrder(root.left);

    let left: TreeNode | null = root.left;
    let right: TreeNode | null = root.right;

    if (left) {
      root.right = left;
      root.left = null;
      while (root.right) {
        root = root.right;
      }
      root.right = right;
    }

    preOrder(root.right);

    return root;
  }

  preOrder(root);
}
