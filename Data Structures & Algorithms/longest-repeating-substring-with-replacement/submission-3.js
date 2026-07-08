class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if(s.length === 1) return 1;

        function getMostFrequent(l, r) {
            const mapped = {}
            let newL = l
            while(newL <= r) {
                mapped[s[newL]] = (mapped[s[newL]] ?? 0) + 1
                newL++
            };

            const mostFreqQty = Math.max(...Object.values(mapped))
            // for(let key of mapped) {
            //     const val = mapped[key]
            //     if(mostFreqQty === val) return key;
            // }

            return mostFreqQty;
        }

        let result = 1

        let p1 = 0
        let p2 = 1

        while(p2 < s.length) {
            let w = p2-p1+1
            const mostFreqQty = getMostFrequent(p1, p2);
            if(w - mostFreqQty <= k) {
                // valido
                result = Math.max(w, result)
                p2++
            } else {
                // nao valido
                p1++
                p2 = p1+1
            }
        }
        return result;
    }
}

// 12 
// XYYX
// k = 2


