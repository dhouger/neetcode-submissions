class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sorted = nums.sort((a, b) => a - b);
  
        const triplets = [];
        const keys = {};
        
        for (let i = 0; i < sorted.length; i++) {
            const first = sorted[i];
            let left = i + 1;
            let right = sorted.length - 1;
            
            while (left < right) {
                const sum = first + sorted[left] + sorted[right];
                
                if (sum < 0) {
                    left++;
                } else if (sum > 0) {
                    right--;
                } else {
                    const key = `${first}${sorted[left]}${sorted[right]}`;
                    if (!keys[key]) {
                        triplets.push([first, sorted[left], sorted[right]]);
                        keys[key] = true;
                    }
                    left++;
                    right--;
                }
            }
        }

        return triplets;
    }
}
