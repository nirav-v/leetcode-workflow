function isValidSudoku(board: string[][]): boolean {
    // build a set for each row, check for repeats
    // same for columns
    // same for each cell

    const rows = {}
    const columns = {}
    const cells = {}

    for (let i = 0; i < board.length; i++){
        rows[i] = new Set()
        columns[i] = new Set()
        for (let j = 0; j < board[i].length; j++){
            cells[`${Math.floor(i/3)}, ${Math.floor(j/3)}`] = new Set()
        }
    }

   

    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board[i].length; j++){
            const cell = board[i][j];
            if (cell === ".") continue
            if (rows[i].has(cell)){
                 console.log(rows, columns, cells)

                return false
            } else {
                rows[i].add(cell)
            }

            if (columns[j].has(cell)){
                 console.log(rows, columns, cells)

             return false
            } else {
                columns[j].add(cell)
            }

            if (cells[`${Math.floor(i/3)}, ${Math.floor(j/3)}`].has(cell)){
                 console.log(rows, columns, cells)

                 return false
            } else cells[`${Math.floor(i/3)}, ${Math.floor(j/3)}`].add(cell)

        }
    }

return true;

};
