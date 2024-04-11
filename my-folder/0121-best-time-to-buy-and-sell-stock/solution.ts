function maxProfit(prices: number[]): number {
    
    let max = 0
    let l = 0
    let r = 1

 // [7,1,5,3,6,4]
    while (r < prices.length){
        if (prices[r] < prices[l]) {
            l = r
            r+=1
            continue;
        }

        const currentProfit = prices[r] - prices[l]

        max = Math.max(max, currentProfit)

        r++
    }

    return max
};

