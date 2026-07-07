class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
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
}
