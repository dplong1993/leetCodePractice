/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let left = 0;
    let right = nums.length - 1;
    while(left < right){
        // console.log(`Left is ${left}. Nums at left is ${nums[left]}. Right is ${right}. Nums at right is ${nums[right]}`);
        if(nums[right] !== val && nums[left] === val){
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left += 1;
            right -= 1;
        } else if(nums[right] !== val){
            left += 1;
        } else if(nums[left] === val){
            right -= 1;
        } else {
            right -= 1;
            left += 1;
        }
    }
    
    let curr = nums.length - 1;
    while(nums[curr] === val){
        curr -= 1;
    }
    return curr + 1;
};