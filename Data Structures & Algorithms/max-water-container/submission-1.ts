class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1;
        let maxProduct = 0;

        while (left < right) {
            const lH = heights[left];
            const rH = heights[right];
            const len = right - left;
            const product = lH < rH ? lH * len : rH * len;
            maxProduct = maxProduct < product ? product : maxProduct;

            if (lH < rH) {
                left++;
                continue;
            }
            
            if (rH < lH) {
                right--;
                continue;
            }

            left++;
            right--;
        }

        return maxProduct;
    }
}
