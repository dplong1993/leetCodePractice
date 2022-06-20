/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    let stack = [];
    for(let i = 0; i < tokens.length; i++){
        let curr = tokens[i];
        if(curr == '+' || curr == '-' || curr == '*' || curr == '/'){
            let num2 = stack.pop();
            let num1 = stack.pop();
            let result = performOperation(curr, num1, num2);
            stack.push(result);
        }
        else stack.push(parseInt(curr));
        
        if(i+1 >= tokens.length) return stack.pop();
    }
};

var performOperation = function(symbol, num1, num2){
    if(symbol == '+') return num1 + num2;
    if(symbol == '-') return num1 - num2;
    if(symbol == '*') return num1 * num2;
    if(symbol == '/'){
        if(num1/num2 < 0) return Math.ceil(num1 / num2);
        else return Math.floor(num1 / num2);
    }
}