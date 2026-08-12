class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // naive
    _topKFrequent(nums, k) {
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

    topKFrequent(nums, k) {
        if(nums.length === 1) return nums;

        const bucketList = Array.from({ length: nums.length }, () => []);
        const numsFreq = {};

        for(let n of nums) {
            numsFreq[n] = (numsFreq[n] ?? 0) + 1;
        };

        for(let key in numsFreq) {
            bucketList[numsFreq[key]-1].push(key)
        }

        const res = [];
        for(let i = bucketList.length -1; i >= 0; i--) {
            if(!bucketList[i].length) continue;

            for(let n of bucketList[i]) {
                res.push(n);
                if(res.length === k) return res;
            }
        };

        return res;
    }
}

// [1,2,2,3,3,3]

// { '1': 1, '2': 2, '3': 3 }

// bl = [[1],[2],[3],0,0,0]
