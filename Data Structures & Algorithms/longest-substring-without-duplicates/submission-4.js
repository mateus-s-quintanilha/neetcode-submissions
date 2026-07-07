class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    // brute force
    _lengthOfLongestSubstring(s) {
        if(s.length <= 1) return s.length;

        let maxSubstr = 1
        for(let i = 0; i < s.length; i++) {
            let seen = new Object();
            let currMaxSubstr = 1
            seen[s[i]] = true

            for(let j = i+1; j < s.length; j++) {
                const char = s[j]
                if(char in seen) break;
                seen[char] = true;
                currMaxSubstr++;
            }

            maxSubstr = Math.max(maxSubstr, currMaxSubstr);
        }

        // console.log({maxSubstr})
        return maxSubstr
    }

    lengthOfLongestSubstring(s) {
        if(s.length <= 1) return s.length;

        let maxSubstr = 1

        let seen = {};
        let currSubstr = 1
        let p1 = 0
        while(p1 < s.length) {
            const char = s[p1];
            if(char in seen) {
                p1 = seen[char] + 1;
                seen = {};
                currSubstr = 1
            } else {
                seen[char] = p1;

                maxSubstr = Math.max(maxSubstr, currSubstr); 

                currSubstr++
                p1++
            }
        }

        return maxSubstr
    }
}

// zxyyxyz
