
// [7,1,5,3,6,4]
// greatest value of day 2 - day 1
function maxProfit(prices: number[]): number {
    
    let result = 0;

    let minPrice = Infinity;

    for (const price of prices){
        if (price < minPrice){
            minPrice = price
        } else if (price - minPrice > result) {
            result = price - minPrice
        };

    }

    return result;
};


