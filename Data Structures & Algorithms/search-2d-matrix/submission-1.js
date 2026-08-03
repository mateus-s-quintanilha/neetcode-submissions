class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let i = 0; i < matrix.length; i++) {
            const row = matrix[i];
            const couldBeBetween = target >= row[0] && target <= row[row.length-1];

            if(couldBeBetween) {
                const isThere = row.includes(target)
                return isThere;
            }
        }

        return false;
    }
}
