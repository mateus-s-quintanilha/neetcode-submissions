class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let l = 0;
        let r = k-1

        const result = new Array();
        while(r < nums.length) {
            const numToPush = Math.max(...nums.slice(l, r+1))
            result.push(numToPush)
            l++
            r++
        }

        // console.log({result})
        return result;
    }
}
