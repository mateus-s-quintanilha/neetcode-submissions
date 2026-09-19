class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    _productExceptSelf(nums) {
        const res = [];

        for(let i = 0; i < nums.length; i++) {
            let prod = 1;
            for(let j = 0; j < nums.length; j++) {
                if(i === j) continue;

                prod *= nums[j]
            }

            res.push(prod);
        };

        // console.log({res})
        return res;
    }

    productExceptSelf(nums) {
        const prefix = new Array(nums.length).fill(null);
        for(let i = 0; i < prefix.length; i++) {
            const prefVal = (prefix[i-1] ?? 1) * nums[i];
            prefix[i] = prefVal;
        };

        const postfix = new Array(nums.length).fill(null);
        for(let i = nums.length-1; i >= 0; i--) {
            const postVal = (postfix[i+1] ?? 1) * nums[i];
            postfix[i] = postVal;
        };

        const res = new Array(nums.length).fill(null);
        for(let i = 0; i < res.length; i++) {
            const resVal = 
                (prefix[i-1] ?? 1) * (postfix[i+1] ?? 1)
            ;

            res[i] = resVal;
        };

        return res;
    };
};


// [1,2,4,6]

// [1,2,8,48]
// [48,48,24,6]

// [48,24,12,8]


