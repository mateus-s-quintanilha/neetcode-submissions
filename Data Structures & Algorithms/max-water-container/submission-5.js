class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let l = 0;
        let r = heights.length -1;
        let res = 0;

        while(l < r) {
            const width = r - l;
            const height = Math.min(heights[l], heights[r]);
            const area = width * height;

            res = Math.max(res, area);

            if(heights[l] < heights[r]) {
                l++
            } else {
                r--
            }
        };

        return res;
    };
};


//  i             j
// [1,7,2,5,4,7,3,6]