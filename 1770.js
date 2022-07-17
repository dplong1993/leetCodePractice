/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
// Top Down Approach
// m = length of multipliers
// n = length of nums
// Time = O(m*m);
// Space = O(m*m);
// var maximumScore = function(nums, multipliers) {
//     let memo = [];
//     for(let i = 0; i < multipliers.length; i+=1){
//         let arr = [];
//         for(let j = 0; j < multipliers.length; j+=1){
//             arr.push(0);
//         }
//         memo[i] = arr;
//     }
//     // console.log(memo);
//     return dp(nums, multipliers, 0, 0, memo);
// };

// const dp = (nums, mult, i, left, memo) => {
//     if(i === mult.length) return 0;
//     let right = nums.length - 1 - (i - left);
    
//     if(memo[i][left] == 0){
//         //take num from left
//         let leftChoice = mult[i]*nums[left] + dp(nums, mult, i+1, left+1, memo);
//         //take num from right
//         let rightChoice = mult[i]*nums[right] + dp(nums, mult, i+1, left, memo);
//         memo[i][left] = Math.max(leftChoice, rightChoice);    
//     }
    
//     return memo[i][left];
// }

// bottom up approach
// Time and Space same as above
var maximumScore = function(nums, multipliers){
    let n = nums.length;
    let m = multipliers.length;
    let dp = [];
    for(let i = 0; i < m + 1; i += 1){
        let newArr = [];
        for(let j = 0; j < m + 1; j += 1){
            newArr.push(0);
        }
        dp[i] = newArr;
    }
    
    for(let i = m - 1; i >= 0; i -= 1){
        for(let left = i; left >= 0; left -= 1){
            // console.log(`I is ${i}, Left is ${left}`);
            let mult = multipliers[i];
            let right = n - 1 - (i - left);
            // console.log(`Left choices is ${mult} * ${nums[left]} + ${dp[i+1][left+1]}`);
            // console.log(`Right choices is ${mult} * ${nums[right]} + ${dp[i+1][left]}`);
            let leftChoice = mult * nums[left] + dp[i+1][left+1];
            let rightChoice = mult * nums[right] + dp[i+1][left];
            dp[i][left] = Math.max(leftChoice, rightChoice);
        }
    }
    
    return dp[0][0];
};