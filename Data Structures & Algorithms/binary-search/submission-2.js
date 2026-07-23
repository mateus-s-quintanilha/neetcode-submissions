class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let idx = -1;
        let computedEl = 0

        function binarySearch(l, r) {
            console.log('=================')
            if(computedEl > nums.length) return
            const midI = Math.ceil((r+l) / 2)

            const midVal = nums[midI]
            computedEl++
            console.log('step 1', {l, r, computedEl, midVal})

            if(midVal === target) {
                console.log('step 2', {computedEl, midVal})
                idx = midI;
                return;
            } else if(midVal < target) {
                console.log('step 3', {computedEl, midVal})
                return binarySearch(midI+1, r);
            } else {
                console.log('step 4', {computedEl, midVal})
                return binarySearch(l, midI-1);
            }
        }

        binarySearch(0, nums.length-1)

        return idx;
    }
}


// cc = 1
// 9

//         l    r
// [-1,0,3,5,9,12]

//     m
// [5, 9, 12]
