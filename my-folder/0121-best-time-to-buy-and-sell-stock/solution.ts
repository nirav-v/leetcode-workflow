function maxProfit(prices: number[]): number {
    let maxProfit = 0;

    let i = 0;
    let j = i + 1;

    while (j < prices.length){
        if (prices[j] - prices[i] > maxProfit) maxProfit = prices[j] - prices[i];

        if (prices[j] < prices[i]) i = j;

        j++;
    }

    return maxProfit;

};
