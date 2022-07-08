/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    x = String(x);
    if(x.length < 1) return false;
    let tail = x.length - 1;
    for(let i = 0; i < x.length; i += 1){
        // console.log(`${x[i]} and ${x[tail]}`);
        if(x[i] !== x[tail]) return false;
        tail -= 1;
    }
    return true;
};