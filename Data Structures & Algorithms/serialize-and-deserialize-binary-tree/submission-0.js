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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (!root) {
            return '#';
        }

        const leftStr = this.serialize(root.left);
        const rightStr = this.serialize(root.right);

        return `${root.val},${leftStr},${rightStr}`;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const values = data.split(',');
        let index = 0;

        function build() {
            const value = values[index];
            index++;

            if (value === '#') {
                return null;
            }

            const node = new TreeNode(Number(value));

            node.left = build();
            node.right = build();

            return node;
        }

        return build();
    }
}
