class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // naive
    topKFrequent(nums, k) {
        if(nums.length === 1) return nums;

        const numsFreq = {};

        for(let n of nums) {
            numsFreq[n] = (numsFreq[n] ?? 0) + 1;
        };

        const res = [];
        for(let key in numsFreq) {
            const freq = numsFreq[key]
            res.push([freq, key]);
        };

        return res.sort((a, b) => b[0]-a[0]).slice(0, k).map(([freq, val]) => val);
    }
}
