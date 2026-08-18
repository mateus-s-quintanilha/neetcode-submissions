class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = {};
        for(let n of nums) {
            freqMap[n] = (freqMap[n] ?? 0) + 1;
        };

        let res = [];
        // find pairs 
        for(let key in freqMap) {
            let freq = freqMap[key];
            res.push(
                [Number(key), freq]
            );
        };

        res.sort((a, b) => b[1] - a[1]);
        return res.slice(0, k).map(([num, _]) => num);
    }
}

//  [1,2,2,3,3,3]
// k = 2