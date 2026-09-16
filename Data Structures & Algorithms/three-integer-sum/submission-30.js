class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    _threeSum(nums) {
        const triplets = [];
        const computedTriplets = new Set();
        for(let i = 0; i < nums.length - 2; i++) {
            for(let j = i+1; j < nums.length - 1; j++) {
                for(let k = j+1; k < nums.length; k++) {
                    const triplet = [nums[i], nums[j], nums[k]]
                    const sumAll = triplet.reduce((prev, curr) => prev += curr);
                    
                    if(sumAll === 0) {    
                        triplet.sort((a, b) => a-b)
                        const joinTriplets = triplet.join(',');
                        if(!computedTriplets.has(joinTriplets)) {
                            computedTriplets.add(joinTriplets);
                            triplets.push(triplet);
                        } 
                    }
                }
            }
        }

        return triplets;
    }

    threeSum(nums) {
        nums.sort((a, b) => a-b);
        const triplets = [];

        for(let i = 0; i < nums.length - 2; i++) {
            if(i > 0 && nums[i] === nums[i-1]) continue;

            let j = i+1;
            let k = nums.length-1;
            while(j < k) {
                const currTrip = [nums[i], nums[j], nums[k]]
                const sumAll = currTrip.reduce((prev, curr) => prev += curr);
                
                if(sumAll > 0) {
                    k--;
                } else if(sumAll < 0) {
                    j++;
                } else {
                    triplets.push(currTrip);
                    j++;
                    k--;
                    while(j < k && nums[j] === nums[j-1]) j++;
                    while(k > j && nums[k] === nums[k+1]) k--;
                }
            }
        }

        // console.log({ triplets })
        return triplets;
    }
}

//      i    j k
// [-4,-1,-1,0,1,2]

// [ [-1,-1,2] ]

