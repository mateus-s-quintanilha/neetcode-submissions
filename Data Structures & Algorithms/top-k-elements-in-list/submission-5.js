class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    // bucket list algorithm
    topKFrequent(nums, k) {
        const bucketList = Array.from({ length: nums.length+1 }, () => []);

        const numsFreq = {};
        for(let num of nums) {
            numsFreq[num] = (numsFreq[num] ?? 0) + 1;
        }

        for(let key in numsFreq) {
            const freq = Number(numsFreq[key]);
            bucketList[freq].push(Number(key))
        };
        const res = [];

        for(let i = bucketList.length -1; i >= 0; i--) {
            if(bucketList[i].length === 0) continue;
            
            for(let n of bucketList[i]) {
                res.push(n);
                if(res.length === k) return res;
            }
        }
        return res;
    }
}