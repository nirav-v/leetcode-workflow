function isValidSudoku(board: string[][]): boolean {

// maintain a reference to the rows and columns we have already encountered as we loop through each cell
// key of each row number, value of a set conatining items in that row
    const rows = Array.from({ length: 9 }, () => new Set<string>());
    const cols = Array.from({ length: 9 }, () => new Set<string>());
// key of each column index, value of set conataining items in that col

// represent each of the nine squares by row, col (1 - 9), store a set of value in each square
// key of [row, col] val of value 
    const squares = {
        '[0, 0]': new Set(),
        '[0, 1]': new Set(),
        '[0, 2]': new Set(),
        '[1, 0]': new Set(),
        '[1, 1]': new Set(),
        '[1, 2]': new Set(),
        '[2, 0]': new Set(),
        '[2, 1]': new Set(),
        '[2, 2]': new Set(),
    }

console.log(rows, cols)
    //  loop over rows
    for (let i = 0; i < board.length; i++){
        let rowNumber = i
        let row = board[i];
        // loop over cols within a row
        for (let j = 0; j < row.length; j++){
            let colNumber = j;
            let cell = row[j];
            if (cell === ".") continue;
            if (rows[rowNumber].has(cell)) {
                console.log("repeat row", cell, rows[rowNumber])
                return false
            }
            if (cols[colNumber].has(cell)) {
                console.log("repeat col", cell, cols[colNumber])
                return false;
            }
            if (squares[`[${Math.floor(rowNumber / 3)}, ${Math.floor(colNumber / 3)}]`].has(cell)) return false;
                
            rows[rowNumber].add(cell);
            cols[colNumber].add(cell);
            squares[`[${Math.floor(rowNumber / 3)}, ${Math.floor(colNumber / 3)}]`].add(cell)

        }
                console.log(rows, cols)
    }


    return true;
};
