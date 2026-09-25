class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let l = 0;
        let r = heights.length - 1;

        let res = 0;
        while(l < r) {
            const containerArea = Math.min(heights[l], heights[r]) * (r - l);
            res = Math.max(res, containerArea);

            if(heights[l] <= heights[r]) {
                l++;
            } else {
                r--;
            }
        };

        // console.log({res});
        return res;
    }
}


//    l           r
// [1,7,2,5,4,7,3,6]

// 1,6 = 7*1 = 7
// 1,6 = 7*1 = 7