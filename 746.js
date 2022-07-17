/**
 * @param {number[]} cost
 * @return {number}
 */

// //bottom up method
// var minCostClimbingStairs = function(cost) {
//     if(cost.length === 1) return cost[0];
    
//     const values = new Array(cost.length);
    
//     //base cases
//     values[cost.length] = 0;
//     values[cost.length - 1] = cost[cost.length-1] + 0;
    
//     for(let i = cost.length - 2; i >= 0; i -= 1){
//         values[i] = cost[i] + Math.min(values[i+1], values[i+2]);
//     }
    
//     return Math.min(values[0], values[1]);
// };

//top down approach
var minCostClimbingStairs = (cost) => {
    const memo = {};
    return minimumCost(cost, cost.length, memo);
};

const minimumCost = (cost, i, memo) => {
    if(i <= 1) return 0;
    
    if(i in memo) return memo[i];
    
    let downOne = cost[i - 1] + minimumCost(cost, i - 1, memo);
    let downTwo = cost[i - 2] + minimumCost(cost, i - 2, memo);
    memo[i] = Math.min(downOne, downTwo);
    return memo[i];
};