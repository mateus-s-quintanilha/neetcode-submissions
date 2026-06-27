class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numberToBeFound = {};

        for(let i = 0; i < nums.length; i++) {
            const n = nums[i];

            if(n in numberToBeFound) {
                return [numberToBeFound[n], i]
            }

            let offset = target - n

            numberToBeFound[offset] = i;
        }
    }
}
