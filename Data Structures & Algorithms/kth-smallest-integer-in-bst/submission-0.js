/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count = 0;
        let answer = null;

        function inOrder(node) {
            if (!node || answer !== null) {
                return;
            }

            inOrder(node.left);

            count++;
            if (count === k) {
                answer = node.val;
                return;
            }

            inOrder(node.right);
        }

        inOrder(root);
        return answer;
    }
}
