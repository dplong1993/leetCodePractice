// var search = function(nums, target, low = 0, high = nums.length - 1) {
//     if(low > high) return -1;
//     const mid = low + Math.floor((high - low) / 2);
//     if(nums[mid] === target) return mid;
//     if(low === high) return -1;
    
//     if(nums[mid] > target){
//         return search(nums, target, low, mid);   
//     } else {
//         return search(nums, target, mid + 1, high);   
//     }
// };

var search = function(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;
    while(lo <= hi){
      const mid = Math.floor((lo + hi) / 2);
      if(target < nums[mid]){
        hi = mid - 1;
      } else if(target > nums[mid]){
        lo = mid + 1;
      } else {
        return mid;
      }
    }
    return -1;
};