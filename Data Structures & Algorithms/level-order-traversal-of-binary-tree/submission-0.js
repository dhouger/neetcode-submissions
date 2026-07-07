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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (root == null) {
            return [];
        }

        const left = this.levelOrder(root.left);
        const right = this.levelOrder(root.right);

        const result = [[root.val]];
        const max = Math.max(left.length, right.length);

        for (let i = 0; i < max; i++) {
            const joined = [
                ...(left.length > i ? left[i] : []),
                ...(right.length > i ? right[i] : [])
            ];

            result.push(joined);
        }

        return result;
    }
}
