class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    _topKFrequent(nums, k) {
        if(k === nums.length) return nums;

        const numsFrequency = {};
        for(let n of nums) {
            numsFrequency[n] = (numsFrequency[n] ?? 0) + 1;
        };

        const tuples = [];
        for(let key in numsFrequency) {
            const val = numsFrequency[key];
            tuples.push(
                [ Number(key), val ]
            );
        };

        tuples.sort((a, b) => b[1]- a[1]);

        const res = [];
        for(let i = 0; i < k; i++) {
            res.push(tuples[i][0])
        };

        return res;
    };

    topKFrequent(nums, k) {
        const bucketList = Array.from({ length: nums.length }, () => []);
        const numsFrequency = {};
        for(let n of nums) {
            numsFrequency[n] = (numsFrequency[n] ?? 0) + 1;
        };
    
        for(let key in numsFrequency) {
            bucketList[(numsFrequency[key] - 1)].push(Number(key));
        };

        // console.log({ bucketList })
        const res = [];
        for(let i = bucketList.length-1; i >= 0; i--) {
            const b = bucketList[i];
            if(!b.length) continue;

            for(let n of b) {
                res.push(n);
                if(res.length === k) return res;
            }
        }

        return res;
    };
};

// [1,2,2,3,3,3]

// [ [], [], [], [], [], [] ]

// { '3': 3, '2': 2, '1': 1 }