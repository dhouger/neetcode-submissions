class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(s: string): boolean {
        return /[a-z0-9]/.test(s);
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let start = 0;
        let end = s.length - 1;

        while (start < end) {
            const sStart = s[start].toLowerCase();
            const sEnd = s[end].toLowerCase();

            if (!this.isAlphaNumeric(sStart)) {
                start++;
                continue;
            } else if (!this.isAlphaNumeric(sEnd)) {
                end--;
                continue;
            } else if (sStart == sEnd) {
                start++;
                end--;
                continue;
            } else {
                return false;
            }
        }

        return true;
    }
}
