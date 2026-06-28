class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const qtyMap = new Object();

        for(const n of nums) {
            n in qtyMap ? qtyMap[n] += 1 : qtyMap[n] = 1;
        }

        const arr = [];
        for(const key in qtyMap) {
            const val = qtyMap[key]
            arr.push([key, val])
        }

        arr.sort((a, b) => b[1] - a[1])

        return arr.slice(0, k).map(item => item[0])
    }
}
