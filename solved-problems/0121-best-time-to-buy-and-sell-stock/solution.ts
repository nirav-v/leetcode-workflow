// [7,1,5,3,6,4]

function maxProfit(prices: number[]): number {
    
    let result = 0
    
    let day1 = 0;
    let day2 = 1;


    while (day2 < prices.length){
        // ensure that we buy at a lower price than we sell
        while (prices[day1] > prices[day2]){
            day1 = day2;
            // if not already at the last index, move day2 forward
            if (day2 < prices.length -1) day2++
        }

        result = Math.max(result, (prices[day2] - prices[day1]))

        day2++;
    }

    return result;

};
