class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    _topKFrequent(nums, k) {
        const freqMap = {};
        for(let n of nums) {
            freqMap[n] = (freqMap[n] ?? 0) + 1;
        };

        let res = [];
        for(let key in freqMap) {
            let freq = freqMap[key];
            res.push(
                [Number(key), freq]
            );
        };

        res.sort((a, b) => b[1] - a[1]);
        return res.slice(0, k).map(([num, _]) => num);
    }
    
    topKFrequent(nums, k) {
        const bucketList = Array.from({ length: nums.length }, () => []);

        const mapFreq = {};
        for(const n of nums) {
            mapFreq[n] = (mapFreq[n] ?? 0) + 1;
        };

        for(const n in mapFreq) {
            const freq = mapFreq[n];

            bucketList[freq-1].push(n);
        };

        const res = [];
        for(let i = bucketList.length - 1; i >= 0; i--) {
            const arr = bucketList[i];
            if(!arr.length) continue;

            for(let n of arr) {
                res.push(n);
                if(res.length === k) return res;
            }
        };

        return res;
    };
};

//  [1,2,2,3,3,3]
// k = 2

//  [0,[1],[2],[3],0,0]