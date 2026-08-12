class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length <= 1) return nums.length;

        let maxSeq = 1;
        const seenMap = new Set(nums);
        for(const num of nums) {
            const isStart = !seenMap.has(num-1);
            let currSeq = 1;
            
            if(isStart) {
                let nxt = num+1;
                while(seenMap.has(nxt)) {
                    seenMap.delete(nxt);
                    currSeq++, nxt++;
                };

                maxSeq = Math.max(currSeq, maxSeq);
            };
        };

        
        return maxSeq;
    };
};

