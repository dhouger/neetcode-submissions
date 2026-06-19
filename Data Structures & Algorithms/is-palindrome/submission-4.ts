class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const matched = s.trim().toLowerCase().match(/\w|\d/g)?.join();

        if (!matched) {
            return true
        }
        
        const midStart = (matched.length % 2 == 1 ? Math.floor(matched.length / 2) : matched.length / 2) - 1;

        for (let i = midStart; i >= 0; i--) {
            if (matched[i] != matched[matched.length - i - 1]) {
                return false;
            }
        }

        return true;
    }
}
