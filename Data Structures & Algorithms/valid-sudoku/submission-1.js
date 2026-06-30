const colRules = {
    0: true,
    1: true,
    2: false,
    3: true,
    4: true,
    5: false,
    6: true,
    7: true,
    8: false,
};
const rowRules = {
    0: true,
    1: true,
    2: false,
    3: true,
    4: true,
    5: false,
    6: true,
    7: true,
    8: false,
};

class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    _isValidSudoku(board) {
        function traverse(rowI, colI) {
            let newRowI = rowI;
            let newColI = colI;
            const mappedVals = {};

            while (rowRules[newRowI]) {
                const currRow = board[newRowI];

                while (colRules[newColI]) {
                    const currVal = currRow[newColI];

                    if (currVal !== ".") {
                        if (currVal in mappedVals) return false;
                        mappedVals[currVal] = true;
                    }
                    newColI++;
                }

                if (currRow[newColI] !== ".") {
                    if (currRow[newColI] in mappedVals) return false;
                    mappedVals[currRow[newColI]] = true;
                }

                newRowI++;
            }
        }

        let rowI = 0;
        let colI = 0;

        while (rowI < board.length && colI < board[rowI]) {
            const row = board[rowI];
            const col = row[colI];
        }
    }

    isValidSudoku(board) {
        const getKube = (row, col) => {
            if (row <= 2) {
                if (col <= 2) {
                    return 1;
                }

                if (col > 2 && col <= 5) {
                    return 2;
                }

                return 3;
            }

            if (row > 2 && row <= 5) {
                if (col <= 2) {
                    return 4;
                }

                if (col > 2 && col <= 5) {
                    return 5;
                }

                return 6;
            }

            if (col <= 2) {
                return 7;
            }

            if (col > 2 && col <= 5) {
                return 8;
            }

            return 9;
        };

        const mappedKubes = {};
        const mappedRows = {};
        const mappedCols = {};

        for (let i = 0; i < board.length; i++) {
            const row = board[i];
            for (let j = 0; j < row.length; j++) {
                const colVal = row[j];
                if (colVal === ".") continue;

                const kube = getKube(i, j);

                const kubeSeen = mappedKubes[kube] !== undefined;
                if (!kubeSeen) {
                    mappedKubes[kube] = {};
                }
                const wasSeenKube = mappedKubes[kube][colVal] !== undefined;
                if (wasSeenKube) return false;
                mappedKubes[kube][colVal] = true;

                const rowSeen = mappedRows[i] !== undefined;
                if (!rowSeen) {
                    mappedRows[i] = {};
                }

                const wasSeenRow = mappedRows[i][colVal] !== undefined;
                if (wasSeenRow) return false;
                mappedRows[i][colVal] = true;

                const colSeen = mappedCols[j] !== undefined;
                if (!colSeen) {
                    mappedCols[j] = {};
                }

                const wasSeenCol = mappedCols[j][colVal] !== undefined;
                if (wasSeenCol) return false;
                mappedCols[j][colVal] = true;
            }
        }

        // console.log({mappedKubes})
        return true;
    }
}
