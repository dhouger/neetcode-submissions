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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const dummy = new ListNode(0);
        let tail = dummy;

        let l1Curr = list1;
        let l2Curr = list2;

        while (l1Curr && l2Curr) {
            if (l1Curr.val <= l2Curr.val) {
                tail.next = l1Curr;
                l1Curr = l1Curr.next;
            } else {
                tail.next = l2Curr;
                l2Curr = l2Curr.next;
            }

            tail = tail.next;
        }

        tail.next = l1Curr || l2Curr;

        return dummy.next;
    }
}