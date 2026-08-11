class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if(nums.length === 1) return nums;

        const bucketList = Array.from({ length: nums.length }, () => []);

        const mapNumToFreq = {};
        for(let num of nums) {
            mapNumToFreq[num] = (mapNumToFreq[num] ?? 0) + 1;
        }

        for(const num in mapNumToFreq) {
            const freq = mapNumToFreq[num];
            bucketList[freq-1].push(num);
        }

        const res = [];
        for(let i = bucketList.length-1; i >= 0; i--) {
            const currArr = bucketList[i];
            if(!currArr.length) continue;

            for(const n of currArr) {
                res.push(n);
                if(res.length === k) return res;
            };
        }

        return res;
    }
}




//  nums = [1,2,2,3,3,3], k = 2
// [2,3]
//       i
// [[1],[2],[3],[],[],[]]

// 2 - 1 = 1 - 1 = 0
// [3,2]



// nums = [7,7], k = 1
// [7]

// [0,[7]]