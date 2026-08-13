class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // naive
    _productExceptSelf(nums) {
        const result = [];
        for(let i = 0; i < nums.length; i++) {
            let currAmm = 1;
            for(let j = 0; j < nums.length; j++){
                if(i === j) continue;
                currAmm *= nums[j];
            };

            result.push(currAmm);
        };

        return result;
    };

    productExceptSelf(nums) {
        const prefix  = new Array(nums.length).fill(0);
        const postfix = new Array(nums.length).fill(0);
    
        for(let i = 0; i < nums.length; i++) {
            prefix[i] = (prefix[i-1] ?? 1) * nums[i];
        };
        
        for(let i = nums.length-1; i >= 0; i--) {
            postfix[i] = (postfix[i+1] ?? 1) * nums[i];
        };

        const res = [];
        for(let i = 0; i < nums.length; i++) {
            res.push(
                (prefix[i-1] ?? 1) * (postfix[i+1] ?? 1)
            );
        };

        return res;
    };
};
