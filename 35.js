var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let mid = null;
    while(low <= high){
        mid = low + Math.floor((high - low) / 2);
        if(nums[mid] < target){
            low = mid + 1;
        } else if(nums[mid] > target) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    
    if(target < nums[mid]) return mid;
    return mid + 1;
};