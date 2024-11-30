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

function levelOrder(root: TreeNode | null): number[][] {
    if(root === null)
        return []
    const stack: { node: TreeNode, layer: number }[] = [];
    const res: number[][] = [];
    stack.push({ node: root, layer: 0 });
    while (stack.length !== 0) {
        let node_set: { node: TreeNode, layer: number } | undefined = stack.pop();

        if (node_set !== undefined) {
            const { node, layer } = node_set;

            // 如果当前层还没有在 res 中初始化，先初始化它
            if (res[layer] === undefined) {
                res[layer] = [];
            }

            // 将当前节点的值加入到对应层级的数组中
            if (node !== null) {
                res[layer].push(node.val);

                // 将右子节点压入栈，层级为 layer + 1
                if (node.right !== null) {
                    stack.push({ node: node.right, layer: layer + 1 });
                }

                // 将左子节点压入栈，层级为 layer + 1
                if (node.left !== null) {
                    stack.push({ node: node.left, layer: layer + 1 });
                }
            }
        }
    }

    return res;
};