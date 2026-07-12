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
     * @return {number}
     */
    maxPathSum(root) {
        this.best = -Infinity;
        this.maxGain(root);
        return this.best;
    }

    maxGain(node) {
        if (!node) {
            return 0;
        }

        const leftGain = Math.max(0, this.maxGain(node.left));
        const rightGain = Math.max(0, this.maxGain(node.right));

        const pathThroughNode = node.val + leftGain + rightGain;
        this.best = Math.max(this.best, pathThroughNode);

        return node.val + Math.max(leftGain, rightGain);
    }
}
