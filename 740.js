/**
 * @param {number[]} nums
 * @return {number}
 */

// Top Down Approach
// n = length of nums
// k = the maximum element of nums
// Time = O(n + k) because we iterate through nums giving us n time and then we recurse and solve k unique problems
// Space = O(n + k) because the size of points is equal to the unique numbers in nums which in worst case is n and 
// the recusion starck to solve k unique problems will be k. 
//
// var deleteAndEarn = function(nums) {
//     let points = {};
//     let memo = {};
//     let maxNumber = 0;
//    
//     for(let num of nums){
//         num in points ? points[num] += num : points[num] = num;
//         maxNumber = Math.max(maxNumber, num);
//     }
//    
//     return maxPoints(maxNumber, points, memo);
// };

// const maxPoints = (num, points, memo) => {
//     if(num === 0) return 0;
//     if(num === 1) return num in points ? points[num]: 0;
//    
//     if(num in memo) return memo[num];
//    
//     let gain = num in points ? points[num]: 0;
//     memo[num] = Math.max(maxPoints(num - 1, points, memo), (maxPoints(num - 2, points, memo) + gain));
//     return memo[num];
// };

//Bottom Up Approach

var deleteAndEarn = function(nums) {
    const points = {};
    let maxNumber = 0;
    
    for(let num of nums){
        num in points ? points[num] += num: points[num] = num;
        maxNumber = Math.max(maxNumber, num);
    }
    
    //Make solution array and base Cases
    const maxPoints = new Array(maxNumber + 1);
    maxPoints[0] = 0;
    maxPoints[1] = 1 in points ? points[1]: 0;
    
    for(let num = 2; num < maxPoints.length; num += 1){
        let gain = num in points ? points[num] : 0;
        maxPoints[num] = Math.max(maxPoints[num-1], (maxPoints[num-2] + gain));
    }
    
    return maxPoints[maxNumber];
};