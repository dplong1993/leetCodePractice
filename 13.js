/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const charArr = s.split('');
    let output = 0;
    for(let i = 0; i < charArr.length; i++){
        let currChar = charArr[i];
        if(i+1 >= charArr.length){
           output += addRomanInt(currChar);
        }
        else {
            let nextChar = charArr[i+1];
            if(currChar == 'I'){
                if (nextChar == 'V' || nextChar == 'X'){
                    output += subtractRomanInt(nextChar);
                    i++;
                }
                else {
                    output += addRomanInt(currChar);
                }
            }
            if(currChar == 'X'){
                if (nextChar == 'L' || nextChar == 'C'){
                    output += subtractRomanInt(nextChar);
                    i++;
                }
                else {
                    output += addRomanInt(currChar);
                }
            }
            if(currChar == 'C'){
                if (nextChar == 'D' || nextChar == 'M'){
                    output += subtractRomanInt(nextChar);
                    i++;
                }
                else {
                    output += addRomanInt(currChar);
                }
            }
            if(currChar == 'V'){
                output += addRomanInt(currChar);
            }
            if(currChar == 'L'){
                output += addRomanInt(currChar);
            }
            if(currChar == 'D'){
                output += addRomanInt(currChar);
            }
            if(currChar == 'M'){
                output += addRomanInt(currChar);
            }
        }
    }
    return output;  
  };
  
  var addRomanInt = function(s){
      if(s == "I") return 1;
      if(s == "V") return 5;
      if(s == "X") return 10;
      if(s == "L") return 50;
      if(s == "C") return 100;
      if(s == "D") return 500;
      if(s == "M") return 1000;
  }
  
  var subtractRomanInt = function(s){
      if(s == "V") return 4;
      if(s == "X") return 9;
      if(s == "L") return 40;
      if(s == "C") return 90;
      if(s == "D") return 400;
      if(s == "M") return 900;
  }