# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        curA = headA
        curB = headB
        lenA = 1
        lenB = 1
        gap = 0
        while(curA.next != None):
            lenA += 1
            curA = curA.next
        while(curB.next != None):
            lenB += 1
            curB = curB.next
        if (lenA < lenB):
            curA = headB
            curB = headA
            gap = lenB - lenA
        else:
            curA = headA
            curB = headB
            gap = lenA - lenB
        while(gap != 0):
            gap -= 1
            curA = curA.next
        while(curA != None):
            if (curA == curB):
                return curA
            curA = curA.next
            curB = curB.next
        return None
