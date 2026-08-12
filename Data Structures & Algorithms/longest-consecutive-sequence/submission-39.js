class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length <= 1) return nums.length;

        let maxSeq = 1;
        const possibleStarts = [];
        const seenMap = new Set(nums);
        for(const num of nums) {
            const isStart = !seenMap.has(num-1);
            if(isStart) possibleStarts.push(num);
        }

        
        for(let ps of possibleStarts) {
            let currSeq = 1;
            let nxt = ps+1;
            
            while(seenMap.has(nxt)) {
                currSeq++
                seenMap.delete(nxt)
                nxt = nxt+1;
            }

            maxSeq = Math.max(maxSeq, currSeq);
        };

        // console.log(maxSeq)
        return maxSeq;
    };
};

//                i
// [100,4,200,1,3,2]

// currSeq = 1
// { '100': 1, '4': 1, '200': 1, '1': 1, '3': 1,  }
