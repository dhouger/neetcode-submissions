class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let open = [];
    
        for (let c of s) {
            if (c === '[' || c === '{' || c === '(') {
                open.push(c);
            } else {
                const l = open[open.length - 1];
                if (
                    c === ']' && l === '[' ||
                    c === '}' && l === '{' ||
                    c === ')' && l === '('
                ) {
                    open.pop();
                } else {
                    return false;
                }
            }
        }

        return open.length === 0;
    }
}
