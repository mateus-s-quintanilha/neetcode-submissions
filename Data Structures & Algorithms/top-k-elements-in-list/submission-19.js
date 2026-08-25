class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const bucketList = Array.from({length: nums.length}, () => []);
        const mapFreq = {};
        for(const n of nums) {
            mapFreq[n] = (mapFreq[n] ?? 0) + 1;
        };

        for(const num in mapFreq) {
            const freq = mapFreq[num];
            bucketList[freq-1].push(Number(num));
        }

        const res = [];
        for(let i = bucketList.length - 1; i >= 0; i--) {
            const arr = bucketList[i];
            if(!arr.length) continue;

            for(const num of arr) {
                res.push(num);
                if(res.length === k) return res;
            };
        };

        return res;
    };
}


// [1, 2, 2, 3, 3, 3]
// [[],[1],[2],[3],[],[]]