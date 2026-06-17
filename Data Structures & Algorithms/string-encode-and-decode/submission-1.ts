class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let key = '';

        for (let i = 0; i < strs.length; i++) {
            key += strs[i].length + (i == strs.length - 1 ? '|' : ',');
        }

        return key + strs.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str == '') {
            return []
        }

        const keyBreak = str.indexOf('|');
        const keys = str.substring(0, keyBreak).split(',');
        const chars = [...str.substring(keyBreak + 1, str.length)];
        const result = [];

        for (let k of keys) {
            const str = chars.splice(0, +k).join('');
            result.push(str);
        }

        return result;
    }
}
