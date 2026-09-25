class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        const prefix = new Array(nums.length).fill(null);
        for(let i = 0; i < nums.length; i++) {
            let prefVal = prefix[i-1] ?? 1;
            prefix[i] = nums[i] * prefVal;
        };

        const postfix = new Array(nums.length).fill(null);
        for(let i = nums.length-1; i >= 0; i--) {
            let postfixVal = postfix[i+1] ?? 1;
            postfix[i] = nums[i] * postfixVal;
        };

        let res = [];
        for(let i = 0; i < nums.length; i++) {
            let prefixVal = prefix[i-1] ?? 1;
            let postfixVal = postfix[i+1] ?? 1;
            
            res.push(
                prefixVal * postfixVal
            );
        };

        return res;
    };
};
