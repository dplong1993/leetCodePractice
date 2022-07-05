// Time = O(nlogn)
// Space = O(n)
// var sortedSquares = function(nums) {
//     let result = [];
//     for(let num of nums){
//         result.push(num * num);
//     }
//     return result.sort((a, b) => a - b);
// };


// Time = 0(n)
// Space = 0(n)
var sortedSquares = function(nums) {
    let result = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
    
    for(let i = nums.length - 1; i >= 0; i -= 1){
        let square = 0;
        if(Math.abs(nums[left]) < Math.abs(nums[right])){
            square = nums[right];
            right -= 1;
        } else {
            square = nums[left];
            left += 1;
        }
        result[i] = square * square;
    }
    
    return result;
};