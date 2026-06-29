/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let length = 0;
        let curr = head;

        while (curr) {
            length++;
            curr = curr.next;
        }

        const removeIndex = length - n;

        if (removeIndex === 0) {
            return head.next;
        }

        curr = head;

        for (let i = 0; i < removeIndex - 1; i++) {
            curr = curr.next;
        }

        curr.next = curr.next.next;

        return head;
    }
}
