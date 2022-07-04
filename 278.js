var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let low = 1;
        let high = n;
        while (low < high){
            const mid = low + Math.floor((high - low) / 2);
            if(isBadVersion(mid)){
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        return low;
    };
};