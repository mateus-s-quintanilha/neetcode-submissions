class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let allSum = Number.MIN_SAFE_INTEGER    

        for(let i = 0; i < nums.length; i++) {
            let currSum = nums[i]
            allSum = Math.max(allSum, currSum)
            for(let j = i+1; j < nums.length; j++) {
                currSum += nums[j]
                allSum = Math.max(allSum, currSum)
            }
        }

        return allSum
    }

}
