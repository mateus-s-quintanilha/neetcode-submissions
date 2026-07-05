class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let waterQty = 0;

        for(let i = 1; i < height.length-1; i++) {
            let biggestHeightLeft = 0
            let l = i-1
            while(l >= 0) {
                biggestHeightLeft = Math.max(biggestHeightLeft, height[l]);
                l--;
            };

            let biggestHeightRight = 0
            let r = i+1;
            while(r < height.length) {
                biggestHeightRight = Math.max(biggestHeightRight, height[r]);
                r++;
            };

            const currTrappedWater = Math.min(biggestHeightRight, biggestHeightLeft) - height[i];
            console.log({i, height: height[i], currTrappedWater})
            if(currTrappedWater >= 0) waterQty += currTrappedWater;
        }

        return waterQty
    };
};
//  i
// [0,1,0,2,1,0,1,3,2,1,2,1]

