class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // brute force
    _productExceptSelf(nums) {
        const result = [];
        
        for(let i = 0; i < nums.length; i++) {
            let acc = 1;
            for(let j = 0; j < nums.length; j++) {
                if(j === i) continue;
                acc *= nums[j]
            };

            result.push(acc);
        };

        return result;
    }

    productExceptSelf(nums) {
        const pre = [];
        const post = new Array(nums.length).fill(null);

        // calculate prefix
        for(let i = 0; i < nums.length; i++) {
            pre.push(
                (pre[i-1] ?? 1) * nums[i]
            )
        };

        // calculate postfix
        for(let i = nums.length - 1; i >= 0; i--) {
            post[i] = (
                (post[i+1] ?? 1) * nums[i]
            )
        }

        const result = [];
        for(let i = 0; i < nums.length; i++) {
            result.push(
                ( pre[i-1] ?? 1 ) * ( post[i+1] ?? 1 )
            )
        }

        return result;
    }
}


//       [1,2,4,6]

// pre = [1,2,8,48]
// suf = [48,48,24,6]

// [48,24,12,8]