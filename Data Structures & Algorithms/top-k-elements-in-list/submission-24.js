class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyMap = new Map();
        for(const n of nums) {
            const prevVal = frequencyMap.get(n) ?? 0;
            frequencyMap.set(n, prevVal + 1);
        };

        const bucketList = Array.from({ length: nums.length }, () => []);
        frequencyMap.forEach((val, key) => {
            bucketList[val - 1].push(Number(key));
        });

        // console.log({bucketList})
        const res = [];
        for(let i = bucketList.length-1; i >= 0; i--) {
            const bl = bucketList[i];
            if(!bl.length) continue;
            
            for(const b of bl) {
                res.push(b);
                if(res.length === k) return res;
            }
        };

        return res;
    }
}
