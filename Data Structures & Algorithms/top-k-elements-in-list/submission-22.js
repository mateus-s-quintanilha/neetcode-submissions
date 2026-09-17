class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
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


        tuples.sort((a, b) => b[1]- a[1])
        // console.log({tuples})
        const res = [];
        for(let i = 0; i < k; i++) {
            res.push(tuples[i][0])
        }

        // console.log({res})
        return res;
    };
};

// [1,2,2,3,3,3]

// { '3': 3, '2': 2, '1': 1 }