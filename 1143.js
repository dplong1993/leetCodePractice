/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// Top Down approach
// t1 = length of t1
// t2 = length of t2
// Time = (t1 * t2) 
// Space = (t1 * t2)
// var longestCommonSubsequence = function(text1, text2) {
//     const memo = {};
//     return dp(text1, text2, 0, 0, memo);
// };

// const dp = (text1, text2, i, j, memo) => {
//     const key = i + ',' + j;
//     if(i === text1.length || j === text2.length) return 0;
//     if(key in memo) return memo[key];
//     if(text1[i] === text2[j]){
//         memo[key] = dp(text1, text2, i+1, j+1, memo) + 1;
//     } else {
//         memo[key] = Math.max(
//             dp(text1, text2, i + 1, j, memo), 
//             dp(text1, text2, i, j + 1, memo)
//         )
//     }
//     return memo[key];
// }