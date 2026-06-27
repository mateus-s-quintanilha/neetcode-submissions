class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const seenNums = {};
        for(let n of nums) {
            if(n in seenNums) return true;
            seenNums[n] = true;
        }

        return false;
    }
}
