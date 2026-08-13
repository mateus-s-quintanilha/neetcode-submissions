class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length <= 1) return nums.length;

        const numsSet = new Set(nums);

        let res = 1;
        for(let n of nums) {
            const isStartOfSeq = !numsSet.has(n-1);
            
            if(isStartOfSeq) {
                let curr = n;
                let currRes = 0;
                while(numsSet.has(curr)) {
                    currRes++;
                    curr++;
                };
                res = Math.max(res, currRes);
            };
        };

        return res;
    };
};

// [2,20,4,10,3,4,5]
// [2,20,10]
