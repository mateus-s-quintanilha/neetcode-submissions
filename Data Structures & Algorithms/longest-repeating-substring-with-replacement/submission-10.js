class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    characterReplacement(s, k) {
        if(s.length === 1) return 1;

        function getMostFrequent(mapped) {
            const mostFreqQty = Math.max(...Object.values(mapped))
            return mostFreqQty;
        }

        let result = 1

        let p1 = 0
        let p2 = 1
        let mapped = {}
        mapped[s[p1]] = 1
        while(p2 < s.length) {
            mapped[s[p2]] = (mapped[s[p2]] ?? 0) + 1
            
            let w = p2-p1+1
            const mostFreqQty = getMostFrequent(mapped);
            
            if(w - mostFreqQty <= k) {
                result = Math.max(w, result)
                p2++
            } else {
                p1++
                p2 = p1+1
                mapped = {}
                mapped[s[p1]] = 1
            }
        }
        return result;
    }

    characterReplacement(s, k) {
        if(s.length === 1) return 1;

        function getMostFrequent(mapped) {
            const mostFreqQty = Math.max(...Object.values(mapped))
            return mostFreqQty;
        }


        let result = 1

        let mapped = {};
        let l = 0
        let r = 0

        while(r < s.length) {
            if(s.length - l  < result) return result;

            mapped[s[r]] = (mapped[s[r]] ?? 0) + 1; 
            const w = (r - l) + 1;

            const isValidWindow = w - getMostFrequent(mapped) <= k;
            if(isValidWindow) {
                result = Math.max(result, w);
                r++
            } else {
                if(mapped[s[l]] - 1 <= 0) {
                    delete mapped[s[l]]
                } else {
                    mapped[s[l]] = mapped[s[l]] - 1
                }
                l++;
                r++;
            }
        }

        return result;
    }
}


