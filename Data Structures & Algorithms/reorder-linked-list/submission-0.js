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
     * @return {void}
     */
    reorderList(head) {
        let first = head;
        let fast = head;
        let slow = head;

        // Find the half-way;
        while (fast && fast.next != null) {
            fast = fast.next?.next;
            slow = slow.next;
        }

        // Split
        let second = slow.next;
        slow.next = null;

        let curr = second;
        let prev = null;
        let next;

        // Reverse the second half
        while (curr !== null) {
            next = curr.next
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        second = prev;
        let firstNext;
        let secondNext;

        // Re-order the list
        while (second) {
            firstNext = first.next;
            secondNext = second.next;

            first.next = second;
            second.next = firstNext;

            first = firstNext;
            second = secondNext;
        }

        return head;
    }
}
