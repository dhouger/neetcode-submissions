class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // ga = Grouped Anagrams
        const ga: Record<string, string[]> = {};
        const result = [];
        
        for (let i = 0; i < strs.length; i++) {
            // Creates an anagram key
            const key = [...strs[i]].sort().join('');

            if (!ga[key]) {
                ga[key] = [strs[i]];
            } else {
                ga[key].push(strs[i]);
            }
        }

        for (const[key, value] of Object.entries(ga)) {
            result.push(value);
        }

        return result;
    }
}
