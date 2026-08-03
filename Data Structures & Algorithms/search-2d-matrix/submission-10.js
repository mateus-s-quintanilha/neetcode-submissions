class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let row of matrix) {
            if(target < row[0]) break;
            
            const couldBeBetween = target >= row[0] && target <= row[row.length-1];

            if(couldBeBetween) {
                let l = 0
                let r = row.length -1

                while(l <= r) {
                    const m = Math.floor((r + l) / 2);

                    if(row[m] < target) {
                        l = m+1;
                    } else if(row[m] > target) {
                        r = m-1;
                    } else {
                        return true;
                    }
                }

                return false;
            }
        }

        return false;
    }
}

[0, 1, 2, 3, 4, 5, 6]