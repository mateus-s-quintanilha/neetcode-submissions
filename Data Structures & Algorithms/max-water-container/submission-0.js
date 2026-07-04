class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let result = 0;

        for(let i = 0; i < heights.length-1; i++) {
            const h1 = heights[i]
            for(let j = i+1; j < heights.length; j++) {
                const h2 = heights[j];

                result = Math.max( (j - i) * Math.min(h1, h2), result ) ;
            };
        };

        return result;
    };
};

//  i             j
// [1,7,2,5,4,7,3,6]


