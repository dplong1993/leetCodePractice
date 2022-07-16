/**
 * @param {number[]} nums
 * @return {number}
 */

//Top down approach
// var rob = function(nums) {
//     const memo = {};
//     return dp(nums, nums.length - 1, memo);
// };

// const dp = (nums, i, memo) => {
//     //Base Cases
//     if(i === 0) return nums[0];
//     if(i === 1) return Math.max(nums[0], nums[1]);

//     if(i in memo) return memo[i];
//     //Max without hitting current house.
//     let maxWithoutCurr = dp(nums, i - 1, memo);

//     //Max with hitting current house which means you had to hit the second to last house
//     let maxWithCurr = nums[i] + dp(nums, i - 2, memo);
    
//     let maxProfit = Math.max(maxWithoutCurr, maxWithCurr);
//     memo[i] = maxProfit;
//     return memo[i];
// };

//bottom up approach

var rob = function(nums) {
    if(nums.length === 1) return nums[0];
    
    const values = new Array(nums.length);
    
    //Base cases
    values[0] = nums[0];
    values[1] = Math.max(nums[0], nums[1]);
    
    for(let i = 2; i < nums.length; i += 1){
        values[i] = Math.max(values[i-1], (values[i-2] + nums[i]));
    }
    
    return values[nums.length - 1];
}