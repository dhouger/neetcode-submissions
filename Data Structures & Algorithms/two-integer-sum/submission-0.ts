class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const pairs: Record<number, number> = {}

        for (let i = 0; i < nums.length; i++) {
            if (pairs[nums[i]] !== undefined) {
                return [pairs[nums[i]], i]
            }

            pairs[target - nums[i]] = i;
        }

        return [];
    }
}
