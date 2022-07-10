/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    if(numRows <= 0) return []; 
    if(numRows === 1) return [[1]];
    if(numRows === 2) return [[1],[1,1]];
    
    let previousRows = generate(numRows - 1);
    // console.log(previousRows);
    // console.log(`Previous Rows length is ${previousRows.length}. Previous Row 0 is ${previousRows[0]}. Previous Row 1 is ${previousRows[1]}`);
    const currentRow = [1];
    let lastRowIdx = previousRows.length - 1;
    // console.log(`PreviousRows is ${previousRows}. LastRowArray is ${previousRows[lastRowIdx]}`);
    for(let i = 0; i < previousRows[lastRowIdx].length - 1; i++){
        // console.log(`PreviousRows at i is ${previousRows[lastRowIdx][i]}. PreviousRows at i + 1 is ${previousRows[lastRowIdx][i + 1]}`)
        currentRow.push(previousRows[lastRowIdx][i] + previousRows[lastRowIdx][i + 1]);
    }
    currentRow.push(1);
    
    return [...previousRows, [...currentRow]];
};