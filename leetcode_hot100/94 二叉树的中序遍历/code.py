# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        arr = []

        def Inorder(root: Optional[TreeNode]):
            if (root == None):
                return

            Inorder(root.left)
            arr.append(root.val)
            Inorder(root.right)

        Inorder(root)
        return arr
        