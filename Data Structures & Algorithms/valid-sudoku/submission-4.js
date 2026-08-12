class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const kubeMap = {};
        const rowMap = {};
        const colMap = {};

        function getKube(row, column) {
            return `${Math.floor(row / 3)},${Math.floor(column / 3)}`;
        }

        for(let i = 0; i < board.length; i++) {
            const row = board[i];
            for(let j = 0; j < row.length; j++) {
                const col = row[j];
                if(col === ".") continue;
                const kube = getKube(i, j);

                kubeMap[kube] ||= {};
                if(col in kubeMap[kube]) return false
                else kubeMap[kube][col] = true; 
                
                rowMap[i] ||= {};
                if(col in rowMap[i]) return false;
                else rowMap[i][col] = true;

                colMap[j] ||= {};
                if(col in colMap[j]) return false;
                else colMap[j][col] = true;
            };
        };

        return true;
    };
}


