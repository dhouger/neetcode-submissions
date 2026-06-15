class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // Edge case
        if (s.length != t.length) {
            return false;
        }

        const compare: Record<string, number> = {};

        for (const a of s) {
            compare[a] = (compare[a] ?? 0) + 1;
        }

        for (const b of t) {
            if (!compare[b]) {
                return false;
            }

            compare[b] -= 1;
        }

        return true;
    }
}
