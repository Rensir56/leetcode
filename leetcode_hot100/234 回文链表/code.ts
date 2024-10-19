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
function isPalindrome(head: ListNode | null): boolean {
    let arr:number[] = []; // 将链表转为数组
    while(head){
        arr.push(head.val);
        head = head.next;
    }
    for(let i:number = 0; i < arr.length/2; i++){
        if(arr[i] !== arr[arr.length-1-i])
            return false;
    }
    return true;
};