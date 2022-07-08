/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let visited = new Set();
    let count = 0;
    for(let row = 0; row < grid.length; row += 1){
        for(let col = 0; col < grid[row].length; col += 1){
            const key = row + ',' + col;
            if(grid[row][col] === '1' && visited.has(key) === false){
                dfs(grid, row, col, visited);
                count += 1;
            }
        }
    }
    return count;
};

const dfs = (grid, row, col, visited) => {
    if(isInBounds(grid, row, col) === false) return;
    if(grid[row][col] === '0') return;
    
    const key = row + ',' + col;
    if(visited.has(key)) return;
    
    visited.add(key);
    
    dfs(grid, row + 1, col, visited);
    dfs(grid, row - 1, col, visited);
    dfs(grid, row, col + 1, visited);
    dfs(grid, row, col - 1, visited);
    
};
    
const isInBounds = (grid, row, col) => {
    const rowInBounds = 0 <= row && row < grid.length;
    if(rowInBounds === false) return rowInBounds;
    const colInBounds = 0 <= col && col < grid[row].length;
    return colInBounds;
}