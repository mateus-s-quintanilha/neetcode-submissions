class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    _longestConsecutive(nums) {
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

            result = Math.max(result, currSeq.length)
        };

        return result;
    }

    longestConsecutive(nums) {
        if(nums.length <= 1) return nums.length
        const computedNums= {};

        for(let num of nums) {
            computedNums[num] = true;
        }

        let largestSeq = 1

        for(let val in computedNums) {
            const isStartSeq = !computedNums[Number(val) - 1];
            let currSeq = 1

            if(isStartSeq) {
                let currEl = Number(val) + 1
                while(currEl in computedNums) {
                    currEl++
                    currSeq++
                }
            } else continue

            largestSeq = Math.max(largestSeq, currSeq);
        }

        return largestSeq;
    }
}
