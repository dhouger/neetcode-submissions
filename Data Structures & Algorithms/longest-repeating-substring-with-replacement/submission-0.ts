class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let left = 0; 
        let longest = 0;
        let mostCommon = 0;
        let count: Record<string, number> = {};

        if (s.length <= k) {
            return s.length;
        }

        for (let right = 0; right < s.length; right++) {
            const l = s[left];
            const r = s[right];
            count[r] = count[r] ? count[r] += 1 : 1;
            mostCommon = Math.max(mostCommon, count[r]);

            if (right - left + 1 - mostCommon > k) {
                count[l] -= 1;
                left++;
            }

            longest = Math.max(longest, right - left + 1);
        }

        return longest
    }
}
