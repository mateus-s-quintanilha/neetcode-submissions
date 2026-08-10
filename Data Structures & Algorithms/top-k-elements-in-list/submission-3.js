class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    // bucket list algorithm
    topKFrequent(nums, k) {
        const bucketList = new Array(nums.length+1).fill(null);

        const numsFreq = {};
        for(let num of nums) {
            numsFreq[num] = (numsFreq[num] ?? 0) + 1;
        }

        for(let key in numsFreq) {
            const freq = Number(numsFreq[key]);
            if(bucketList[freq] === null) {
                bucketList[freq] = [Number(key)]
            } else {
                bucketList[freq].push(Number(key))
            }
        };

        const res = [];

        for(let i = bucketList.length - 1; i >= 0; i--) {
            if(bucketList[i] === null) continue;
            
            bucketList[i].forEach(val => {
                if(res.length === k) return res;
                res.push(val);
            })
        }
        return res;
    }
}

// { 1: {n: 1, v: 1}, 2: 2, 3: 3 }