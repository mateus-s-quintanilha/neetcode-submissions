class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    isValidSudoku(board) {

        const getKube = (row, col) => {
            return `${Math.floor(row/3)},${Math.floor(col/3)}`;
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
