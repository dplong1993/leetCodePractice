//Time = 0(n)
//Space = 0(1)
var rotate = function(nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};


const reverse = (nums, start, end) => {
    while (start < end){
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start += 1;
        end -= 1;
    }
}

// Time = 0(n + k)
// Space = 0(n)
// var rotate = function(nums, k) {
//     const result = [];
//     for(let i = k; i > 0; i -= 1){
//         console.log(`I is ${i}. nums targeted is ${nums[nums.length - i]}`);
//         result.push(nums[nums.length - i]);
//     }
    
//     for(let j = 0; j < nums.length - k; j += 1){
//         console.log(`J is ${j}. nums targeted is ${nums[j]}`);
//         result.push(nums[j]);
//     }
    
//     for(let k = 0; k < nums.length; k += 1){
//         nums[k] = result[k];
//     }
// };