
function maxProfit(prices: number[]): number {

    let i = 0;
    let buyingPrice = prices[0]
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++){
        // dont bother calculating if our buy price is higher than the sell price
        if (prices[i] < buyingPrice){
            buyingPrice = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - buyingPrice)
        }
    }
    
    return maxProfit;

};
