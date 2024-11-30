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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let curA:ListNode|null = headA;
    let curB:ListNode|null = headB;
    let lenA:number = 1;
    let lenB:number = 1;
    let gap:number = 0;
    while(curA.next !== null){
        lenA++;
        curA=curA.next;
    }
    while(curB.next !== null){
        lenB++;
        curB=curB.next
    }
    if (lenA < lenB){
        gap = lenB-lenA;
        curA = headB;
        curB = headA;
    } else {
        gap = lenA-lenB;
        curA = headA;
        curB = headB;
    }
    while(gap--){
        curA=curA.next;
    }
    while(curA !== null){
        if (curA === curB){
            return curA
        }
        curA=curA.next;
        curB=curB.next;
    }
    return null;
};