class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    _threeSum(nums) {
        const res = [];
        const compiledTriplets = new Set();
        for(let i = 0; i < nums.length; i++) {
            for(let j = 0; j < nums.length; j++) {
                if(j === i) continue; 
                for(let k = 0; k < nums.length; k++) {
                    if(k === j || k === i) continue; 

                    const sumAll = nums[i] + nums[j] + nums[k];
                    const tripletsStr = [nums[i], nums[j], nums[k]];
                    tripletsStr.sort((a, b) => a-b);
                    const tripletsStrJoin = tripletsStr.join(',')
                    
                    if(sumAll === 0 && !compiledTriplets.has(tripletsStrJoin)) {
                        compiledTriplets.add(tripletsStrJoin)
                        res.push([ nums[i], nums[j], nums[k] ])
                    }
                }
            }
        }

        return res;
    }

    threeSum(nums) {
        let p1 = 0;

        nums.sort((a, b) => a-b)
        const res = [];
        for(let p1 = 0; p1 < nums.length - 2; p1++) {
            if(p1 > 0 && nums[p1] === nums[p1-1]) continue;
            let p2 = p1+1;
            let p3 = nums.length-1;
            
            while(p2 < p3) {
                const sumAll = nums[p1] + nums[p2] + nums[p3];
                if(sumAll === 0) {
                    res.push([nums[p1], nums[p2], nums[p3]])
                    p2++
                    p3--
                    while(p3 > p2 && nums[p3] === nums[p3+1]) {
                        p3--
                    }

                    while(p2 < p3 && nums[p2] === nums[p2-1]) {
                        p2++
                    }
                } else if(sumAll > 0) {
                    p3--
                } else {
                    p2++
                };
            };
        }

        return res;
    }


}
// [-1,0,1,2,-1,-4]

// [-4,-1,-1,0,1,2]

