class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        // let minArea = heights.length -1 

        let biggestArea = 0;
        for(let i = 0; i < heights.length; i++) {
            const currH = heights[i];
            biggestArea = Math.max(biggestArea, currH);

            let j = i+1;
            if(j >= heights.length) continue;

            let currSmallest = currH;
            while(j < heights.length) {
                currSmallest = Math.min(currSmallest, heights[j])
                const calcArea = currSmallest * ((j-i) + 1);

                biggestArea = Math.max(biggestArea, calcArea)
                j++;
            };
        };

        // console.log({biggestArea})
        return biggestArea;
    };
}

//  i   j
// [7,1,7,2,2,4]

// currSmallest = 1
// biggestArea = 7