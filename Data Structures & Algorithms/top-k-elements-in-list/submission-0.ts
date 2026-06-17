class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const counts: Record<number, number> = {};

        // Get counts of numbers
        for (const num of nums) {
            counts[num] = counts[num] ? counts[num] += 1 : 1;
        }

        const topK: number[] = Object.entries(counts)
        .sort((a, b) => {
            return b[1] - a[1];
        })
        .map((e) => +e[0])
        .slice(0, k);
        
        return topK;
    }
}
