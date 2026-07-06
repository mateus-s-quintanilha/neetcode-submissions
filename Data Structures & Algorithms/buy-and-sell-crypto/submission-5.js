class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    _maxProfit(prices) {
        if(prices.length <= 1) return 0; 
        let profit = 0;

        for(let i = 0; i < prices.length-1; i++) {
            const buyVal = prices[i];
            for(let j = i+1; j < prices.length; j++) {
                const selVal = prices[j];
                profit = Math.max(profit, selVal - buyVal);
            };
        };

        return profit;
    }

    maxProfit(prices) {
        if(prices.length <= 1) return 0; 
        
        let maxProfit = 0
        let minBuy = prices[0]
        for(let i = 1; i < prices.length; i++) {
            let sell = prices[i];
            let currProfit = sell - minBuy;
            maxProfit = Math.max(maxProfit, currProfit);
            minBuy = Math.min(prices[i], minBuy);
        };

        return maxProfit;
    }

}
