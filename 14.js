/**
 * @param {string[]} strs
 * @return {string}
 */

 var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    let prefix = '';
    let maxPrefixLength = Math.min(...strs.map(str => str.length));
    for (let i = 0; i < maxPrefixLength; i++) {
      let char = strs[0][i];
      if (strs.every(str => str[i] === char)) {
        prefix += char;
      } else {
        break;
      }
    };  
    return prefix;
  };
  
  // var longestCommonPrefix = function(strs) {
  //     const result = [];
      
  //     let minLength = Infinity;
      
  //     for(let str of strs){
  //         minLength = Math.max(minLength, str.length);
  //     }
      
  //     for(let i = 0; i < minLength; i++){
  //         let letters = [];
  //         let char = strs[0][i];
  //         letters.push(char);
  //         for(let n = 0; n < strs.length; n += 1){
  //             if(letters[0] !== strs[n][i]) letters.push(strs[n][i]);
  //         }
  //         if(letters.length === 1) {
  //             result.push(char);
  //         } else {
  //             break;
  //         }
  //     }
      
  //     return result.length === 0 ? '': result.join('');  
  // };