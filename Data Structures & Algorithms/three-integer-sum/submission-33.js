class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];

        nums.sort((a, b) => a-b);

        for(let i = 0; i < nums.length; i++) {
            if(i > 0 && nums[i] === nums[i-1]) continue;
            let j = i+1;
            let k = nums.length - 1;

            while(j < k) {
                const sumAll = nums[i] + nums[j] + nums[k];
                if(sumAll < 0) {
                    j++;
                } else if(sumAll > 0) {
                    k--;
                } else {
                    res.push(
                        [ nums[i], nums[j], nums[k] ]
                    );
                    j++;
                    k--;
                    while(j < k && nums[j] === nums[j-1]) j++;

                    while(k > j && nums[k] === nums[k+1]) k--;
                };
            };
        };

        return res;
    };
}
