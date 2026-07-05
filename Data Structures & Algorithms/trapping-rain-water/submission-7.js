class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let waterQty = 0;
        let biggestHeightLeft = height[0]

        for(let i = 1; i < height.length-1; i++) {
            if(biggestHeightLeft <= height[i]) {
                biggestHeightLeft = height[i]
                continue
            }

            let biggestHeightRight = 0
            let r = i+1;
            while(r < height.length) {
                biggestHeightRight = Math.max(biggestHeightRight, height[r]);
                r++;
            };

            const currTrappedWater = Math.min(biggestHeightRight, biggestHeightLeft) - height[i];
            if(currTrappedWater > 0) waterQty += currTrappedWater;

            if(height[i] > biggestHeightLeft) biggestHeightLeft = height[i] 
        }

        return waterQty
    };
};
//  i
// [0,1,0,2,1,0,1,3,2,1,2,1]

