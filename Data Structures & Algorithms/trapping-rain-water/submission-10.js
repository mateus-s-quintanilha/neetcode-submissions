class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    _trap(height) {
        let res = 0;
        if(height.length < 3) return res;

        let maxHeightL = height[0];
        let maxHeightR = height[2];
        for(let i = 1; i < height.length-1; i++) {
            const curr = height[i];

            let rVal = null;
            for(let r = i+1; r < height.length; r++) {
                rVal = Math.max(rVal, height[r]);
            };

            const waterTrapped = Math.min(maxHeightL, rVal) - curr;
            maxHeightL = Math.max(maxHeightL, curr)
            
            if(waterTrapped <= 0) continue;

            res += waterTrapped;
        };

        // console.log({ res })
        return res;
    };

    trap(height) {
        let prefix = new Array(height.length).fill(null);
        prefix[0] = height[0];
        for(let i = 1; i < height.length; i++) {
            let curr = height[i];
            prefix[i] = Math.max(prefix[i-1], curr);
        };

        let postfix = new Array(height.length).fill(null);
        postfix[postfix.length-1] = height[height.length-1];
        for(let j = postfix.length-2; j >= 0; j--) {
            let curr = height[j];
            postfix[j] = Math.max(postfix[j+1], curr);
        };

        // console.log({ prefix, postfix })
        let res = 0;
        for(let k = 1; k < height.length-1; k++) {
            let curr = height[k];
            const trappedWater = Math.min(prefix[k-1], postfix[k+1]) - curr;
            if(trappedWater > 0) res += trappedWater;
            // console.log({ prev: prefix[k-1], curr, post: postfix[k+1] })
        };

        // console.log({res})
        return res;
    };
};


//      i
// [0,2,0,3,1,0,1,3,2,1]

// [null,2,2,]
// []

// calculo = min(l, r)