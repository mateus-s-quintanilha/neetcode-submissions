class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    _maxSubArray(nums) {
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

    maxSubArray(nums) {
        let maxSum = nums[0]
        let currSum = nums[0]
        for(let i = 1; i < nums.length; i++) {
            if((currSum + nums[i]) < nums[i]) {
                currSum = nums[i]
                maxSum = Math.max(maxSum, currSum)
            } else {
                currSum += nums[i]
                maxSum = Math.max(maxSum, currSum)
            }
        }

        return maxSum
        // console.log(maxSum)
    }
}
