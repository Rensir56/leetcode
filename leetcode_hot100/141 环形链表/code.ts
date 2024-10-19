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

function hasCycle(head: ListNode | null): boolean {
    const visited = new Map<ListNode, boolean>(); // 创建一个 Map 来存储已访问的节点
    let current = head; // 从头节点开始遍历

    while (current !== null) {
        // 检查当前节点是否已经被访问过
        if (visited.has(current)) {
            return true; // 如果当前节点已经在 Map 中，说明链表成环
        }

        visited.set(current, true); // 将当前节点标记为已访问
        current = current.next; // 移动到下一个节点
    }

    return false; // 遍历结束，没有环
};