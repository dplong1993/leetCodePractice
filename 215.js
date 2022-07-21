/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//Time = n + k(log n) => n
//Space = O(1);
var findKthLargest = function(nums, k) {
    //n*(log n) but closer to n 
    for(let i = (nums.length - 1); i >= 0; i -= 1){
        if(hasLeftChild(nums, i)) heapifyDown(nums, i);
    }
    
    let result = null;
    
    //K(logn)
    for(let j = 0; j < k; j += 1){
        result = extract(nums);
    }
    
    return result;
};

const hasLeftChild = (hashArr, index) => {
    const leftChildIdx = index * 2 + 1;
    if(leftChildIdx >= hashArr.length) return false;
    if(hashArr[leftChildIdx] === null) return false;
    return true;
};

const hasRightChild = (hashArr, index) => {
    const rightChildIdx = index * 2 + 2;
    if(rightChildIdx >= hashArr.length) return false;
    if(hashArr[rightChildIdx] === null) return false;
    return true;
};

const heapifyDown = (hashArr, index) => {
    let leftIdx = index * 2 + 1;
    let rightIdx = index * 2 + 2;
    let leftChild = hashArr[leftIdx];
    let rightChild = hasRightChild(hashArr, index) ? hashArr[rightIdx] : -Infinity;
    largestIdx = leftChild > rightChild ? leftIdx : rightIdx;
    
    if(hashArr[index] < hashArr[largestIdx]){
        swap(hashArr, largestIdx, index);
        heapifyDown(hashArr, largestIdx);
    }
};

const swap = (hashArr, newIdx, oldIdx) => {
    let temp = hashArr[newIdx];
    hashArr[newIdx] = hashArr[oldIdx];
    hashArr[oldIdx] = temp;
};

const extract = (hashArr) => {
    swap(hashArr, hashArr.length-1, 0);
    const result = hashArr.pop();
    heapifyDown(hashArr, 0);
    return result;
};