class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // Brute force
    _threeSum(nums) {
        const res = [];
        const computedRes = {};

        for (let i = 0; i < nums.length; i++) {
            for (let j = 1; j < nums.length; j++) {
                if (i === j) continue;

                for (let k = 2; k < nums.length; k++) {
                    if (k === j || k === i) continue;
                    const n1 = nums[i];
                    const n2 = nums[j];
                    const n3 = nums[k];

                    if (n1 + n2 + n3 === 0) {
                        const joinRes = [n1, n2, n3].sort().join(",");
                        if (!computedRes[joinRes]) {
                            res.push([n1, n2, n3]);
                            computedRes[joinRes] = true;
                        }
                    }
                }
            }
        }

        return res;
    }

    __threeSum(nums) {
        nums.sort((a, b) => a - b);
        const result = new Array();

        for (let i = 0; i < nums.length - 2; i++) {
            const base = nums[i];
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            if (base >= 1) break;

            let pL = i + 1;
            let pR = nums.length - 1;

            while (pL < pR) {
                const sum = base + nums[pL] + nums[pR];
                if (sum > 0) {
                    pR--;
                } else if (sum === 0) {
                    result.push([base, nums[pL], nums[pR]]);
                    pL++;
                    while (pL < pR && nums[pL] === nums[pL - 1]) {
                        pL++;
                    }

                    pR--;
                    while (pL < pR && nums[pR] === nums[pR + 1]) {
                        pR--;
                    }
                } else {
                    pL++;
                }
            }
        }

        return result;
    }

    threeSum(nums) {
        nums.sort((a,b) => a-b);
        const result = []

        for(let i = 0; i < nums.length-2; i++) {
            let base = nums[i];
            if(i > 0 && nums[i] === nums[i-1]) continue;

            if(nums[i] > 0) break

            let l = i+1;
            let r = nums.length -1;

            while(l < r) {
                const threeSum = base + nums[l] + nums[r];

                if(threeSum > 0) {
                    r--
                } else if(threeSum < 0) {
                    l++
                } else {
                    result.push([base, nums[l], nums[r]])
                    l++
                    r--
                    while(l < r && nums[l] === nums[l-1]) {
                        l++
                    }

                    while(r > l && nums[r] === nums[r+1]) {
                        r--
                    }
                }
            };
        };

        return result;
    };
}
  
//   i j k
// [-1,0,1,2,-1,-4]

//           i  l r
// [-4,-1,-1,0,1,2]

// [ [-1,-1,2], [-1,0,1] ]
