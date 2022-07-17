/**
 * @param {number} n
 * @return {number}
 */

// //bottom up approach
// var tribonacci = function(n) {
//     if(n === 0) return 0;
//     if(n < 3) return 1;
    
//     const values = new Array(n+1);
    
//     //Base Cases
//     values[0] = 0;
//     values[1] = 1;
//     values[2] = 1;
    
//     for(let i = 3; i < n+1; i += 1){
//         values[i] = values[i-3] + values[i-2] + values[i-1];
//     }
    
//     return values[n];
// };

//top down approach
var tribonacci = (n) => {
    const memo = {};
    return calcTribonacci(n, memo);
};

const calcTribonacci = (n, memo) => {
    if(n === 0) return 0;
    if(n < 3) return 1;
    
    if(n in memo) return memo[n];
    
    memo[n] = calcTribonacci(n-1, memo) + calcTribonacci(n-2, memo) + calcTribonacci(n-3, memo);
    return memo[n];
};