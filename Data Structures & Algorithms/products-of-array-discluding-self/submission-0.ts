class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result = new Array(nums.length);

        let prefix = 1;

        for (let i = 0; i < nums.length; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }

        prefix = 1;

        for (let j = nums.length - 1; j >= 0; j--) {
            result[j] *= prefix;
            prefix *= nums[j];
        }

        return result;
    }
}
