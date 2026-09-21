class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums.length) return 0;
        const numSet = new Set(nums);
        let longestSeq = 1;
        for(let n of nums) {
            const hasPrev = numSet.has(n-1);

            if(!hasPrev) {
                let currSeq = 1;
                let currNum = n;
                while(numSet.has(currNum+1)) {
                    currNum++;
                    currSeq++;
                };

                longestSeq = Math.max(longestSeq, (currNum + 1) - n)
            };
        }

        // console.log({longestSeq})
        return longestSeq;
    }
}
