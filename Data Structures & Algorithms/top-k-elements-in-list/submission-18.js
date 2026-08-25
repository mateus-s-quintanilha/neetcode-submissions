class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // naive
    topKFrequent(nums, k) {
        const mapFreq = {};
        for(const n of nums) {
            mapFreq[n] = (mapFreq[n] ?? 0) + 1;
        }

        const res = [];
        for(const num in mapFreq) {
            const freq = mapFreq[num];
            res.push(
                [ num, freq ]
            );
        };

        res.sort((a, b) => b[1]-a[1]);
        return res.slice(0, k).map(([ num, _ ]) => num)
    }
}


// [1,2,2,3,3,3]
// { 1: 1, 2: 2, 3: 3 }

// [ [1, 1], [2, 2], [3, 3] ]