class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let longestNonRepeating = 0;
        let sequence: Record<string, number> = {};
        let index = 0;
    
        if (s.length < 2) {
            return s.length;
        }

        while (index < s.length) {
            if (sequence[s[index]]) {
                index = sequence[s[index]] + 1;
                sequence = {};
            }

            sequence[s[index]] = index;
            const l = Object.keys(sequence).length;
            longestNonRepeating = longestNonRepeating < l ? l : longestNonRepeating;
            index++;
        }

        return longestNonRepeating;
    }
}
