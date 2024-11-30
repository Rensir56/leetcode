/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// 1. 迭代
function reverseList(head: ListNode | null): ListNode | null {
    let new_head:ListNode|null = head;
    if(head === null)
        return null;
    let cur:ListNode|null = head.next;
    new_head.next = null;
    let temp:ListNode|null;
    while(cur!==null){
        temp = cur.next;
        cur.next = new_head;
        new_head = cur;
        cur = temp;
    }
    return new_head;
};

// 2. 递归
function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next)
        return head;
    let new_head:ListNode | null = reverseList(head.next);

    head.next.next = head;
    head.next = null;

    return new_head;
};