class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        let left = 0;
        let right = 0;
        let smallest = '';
        let counts: Record<string, number> = {};
        let total = 0;
        let tCounts: Record<string, number> = {};
        let tTotal = 0;

        if (s.length < t.length) {
            return '';
        }

        for (let c of t) {
            tCounts[c] = tCounts[c] ? tCounts[c] + 1 : 1;
            tTotal++;
        }

        while (right < s.length) {
            const r = s[right];

            counts[r] = counts[r] ? counts[r] += 1 : 1;

            if (tCounts[r] && counts[r] <= tCounts[r]) {
                total++;
            } 
            
            while (total == tTotal) {
                const l = s[left];

                if (smallest === '' || smallest.length > right - left + 1) {
                    smallest = s.substring(left, right + 1);
                }

                if (tCounts[l] && counts[l] <= tCounts[l]) {
                    total--;
                }
                
                counts[l]--;
                left++;
            } 
            
            right++;
        }

        return smallest;
    }
}
