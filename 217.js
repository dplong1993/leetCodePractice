/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Time = O(n);
// Space = O(n);
var containsDuplicate = function(nums) {
    const seenNumbers = new Set();
    for(let i = 0; i < nums.length; i += 1){
        if(seenNumbers.has(nums[i])){
            return true;
        } else {
            seenNumbers.add(nums[i]);
        }
    }
    return false;
};