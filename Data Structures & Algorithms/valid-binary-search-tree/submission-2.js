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
     * @return {boolean}
     */
    isValidBST(root, lowerBound = -Infinity, upperBound = Infinity) {
        if (!root) {
            return true;
        }

        if (root.val >= upperBound || root.val <= lowerBound) {
            return false;
        }

        const validLeft = this.isValidBST(root.left, lowerBound, root.val);
        const validRight = this.isValidBST(root.right, root.val, upperBound);
        
        return validLeft && validRight;
    }
}
