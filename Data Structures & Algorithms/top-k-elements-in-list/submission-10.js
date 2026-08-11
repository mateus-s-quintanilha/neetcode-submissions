class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if(nums.length === 1) return nums;

        const mapNumToFreq = {};

        for(let n of nums) {
            mapNumToFreq[n] = (mapNumToFreq[n] ?? 0) + 1;
        };

        const res = [];
        for(const num in mapNumToFreq) {
            const freq = mapNumToFreq[num];
            res.push([Number(num), freq]);
        }


        res.sort((a, b) => b[1] - a[1])
        return res.slice(0, k).map(tuple => tuple[0]);
    }
}


// { 1: '1', 2: '2', 3: '3' } 
// [ [1, '1'], [2, '2'], [3, '3'] ]



//  [1,2,2,3,3,3]
// k = 2

// [2, 3]

// [0,[1],[2],[3],0,0]


// nums = [7,7], k = 1
// [7]

// [0,[7]]