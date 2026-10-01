class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const bucketList = Array.from({ length: nums.length }, () => []);

        const seenMap = {};
        for(const n of nums) {
            seenMap[n] = (seenMap[n] ?? 0) + 1;
        };

        for(const key in seenMap) {
            const val = seenMap[key];

            bucketList[Number(val) - 1].push(key);
        };

        // console.log({bucketList});

        const res = [];
        for(let i = bucketList.length - 1; i >= 0; i--) {
            const b = bucketList[i];
            if(!b.length) continue;
            
            for(const n of b) {
                res.push(n);
                if(res.length === k) return res;
            };
        };

        return res;
    };
};
