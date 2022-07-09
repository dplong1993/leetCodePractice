/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    stack = intervals.reverse();
    result = [];
    while(stack.length > 1){
        const [cStart, cEnd] = stack.pop();
        const [nStart, nEnd] = stack.pop();
        
        if(cEnd >= nStart){
            if(cEnd < nEnd){
                stack.push([cStart, nEnd]);
            } else {
                stack.push([cStart, cEnd]);
            }
        } else {
            result.push([cStart, cEnd]);
            stack.push([nStart, nEnd]);
        }
    }
    
    result.push(stack.pop());
    return result;
};