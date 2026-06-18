class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const cons = {};
  
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            cons[num] = 1;
        }
        
        const keys = Object.keys(cons);
        let highestCount = 0;
        
        for (let key of keys) {
            const prev = +key - 1;
            const current = +key;
            let next = +key + 1;
            
            if (!cons[prev]) {
                if (!cons[next] && highestCount == 0) {
                    highestCount = 1;
                }

                while (!!cons[next]) {
                    cons[current] += 1;
                    next += 1;
                    
                    if (cons[current] > highestCount) {
                    highestCount = cons[current];
                    }
                }
            }
        }

        return highestCount;
    }
}
