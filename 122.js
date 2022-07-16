/**
 * @param {number[]} prices
 * @return {number}
 */

// Brute force approach
// Time = O(n^n);
// Space = O(n);
// var maxProfit = function(prices) {
//     return calculate(prices, 0);
// };

// const calculate = (prices, s) => {
//     if(s >= prices.length) return 0;
//     let max = 0;
//     for(let start = s; start < prices.length; start += 1){
//         let maxProfit = 0;
//         for(let i = start + 1; i < prices.length; i += 1){
//             if(prices[start] < prices[i]) {
//                 let profit = calculate(prices, i + 1) + prices[i] - prices[start];
//                 maxProfit = Math.max(maxProfit, profit);
//             }
//         }
//         max = Math.max(max, maxProfit);
//     }
//     return max;
// }

//Peak valley approach
// Time = O(n);
// Space = O(1);
// var maxProfit = function(prices) {
//     let i = 0;
//     let valley = prices[0];
//     let peak = prices[0];
//     let maxprofit = 0;
//     while (i < prices.length - 1) {
//         while (i < prices.length - 1 && prices[i] >= prices[i + 1])
//             i += 1;
//         valley = prices[i];
//         while (i < prices.length - 1 && prices[i] <= prices[i + 1])
//             i += 1;
//         peak = prices[i];
//         maxprofit += peak - valley;
//     }
//     return maxprofit;
// };

// Simple one pass
// Time = O(n);
// Space = O(1);
var maxProfit = function(prices) {
    let maxProfit = 0;
    for(let i = 1; i < prices.length; i += 1){
        if(prices[i] > prices[i - 1]){
            maxProfit += prices[i] - prices[i - 1];
        }
    }
    return maxProfit;
}