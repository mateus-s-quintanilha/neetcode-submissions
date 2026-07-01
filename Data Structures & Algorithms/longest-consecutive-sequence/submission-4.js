class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length <= 1) return nums.length
        let result = 1

        for(let i = 0; i < nums.length; i++) {
            const currSeq = [nums[i]];

            let j = 0;

            while(j < nums.length) {
                const curr = nums[j];
                if(curr === currSeq[currSeq.length-1]+1) {
                    currSeq.push(curr);
                    j = 0;
                } else {
                    j++
                }
            };

            console.log('currSeq: ', {currSeq})
            result = Math.max(result, currSeq.length)
        };

        return result;
    }
}
