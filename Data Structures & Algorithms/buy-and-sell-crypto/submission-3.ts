class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let lowest = [0, prices[0]];
        let highest = lowest;
        let maxProfit = 0;

        if (prices.length == 1) {
            return 0;
        }

        for (let i = 1; i < prices.length; i++) {
            const val = prices[i];

            if (lowest[1] > val) {
                lowest = [i, val];
            }

            if (highest[1] < val || lowest[0] > highest[0]) {
                highest = [i, val];
            }

            if (highest[1] - lowest[1] > maxProfit) {
                maxProfit = highest[1] - lowest[1];
            }
        }

        return maxProfit;
    }
}
