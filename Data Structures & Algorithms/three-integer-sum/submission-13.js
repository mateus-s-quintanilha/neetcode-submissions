class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    _threeSum(nums) {
        const res = []
        const computedRes = {}

        for(let i = 0; i < nums.length; i++) {
            for(let j = 1; j < nums.length; j++) {
                if(i === j) continue

                for(let k = 2; k < nums.length; k++) {
                    if(k === j || k === i) continue
                    const n1 = nums[i];
                    const n2 = nums[j];
                    const n3 = nums[k];


                    if(n1 + n2 + n3 === 0) {
                        const joinRes = [n1, n2, n3].sort().join(',')
                        if(!computedRes[joinRes]) {
                            res.push([n1, n2, n3])
                            computedRes[joinRes] = true;
                        }

                    }
                }
            }
        }

        return res;
    }

    threeSum(nums) {
        nums.sort((a, b) => a-b);
        const result = new Array();

        for(let i = 0; i < nums.length-2; i++) {
            const base = nums[i]
            if(i > 0 && nums[i] === nums[i-1]) continue

            if(base >= 1) break

            let pL = i+1
            let pR = nums.length-1

            while(pL < pR) {
                const sum = base + nums[pL] + nums[pR]
                if(sum > 0) {
                    pR--
                } else if(sum === 0) {
                    result.push([base, nums[pL], nums[pR]])
                    pL++
                    while(pL < pR && nums[pL] === nums[pL-1]) {
                        pL++
                    }
                } else {
                    pL++
                }
            }
        }

        return result;
    };

}

[-4,-1,-1,0,1,2]

[[-1,-1,2],[-1,0,1]]
