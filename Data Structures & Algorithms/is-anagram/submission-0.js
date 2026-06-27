class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const hashS = {}
        const hashT = {}

        for(let a of s) {
            hashS[a] = hashS[a] + 1 || 1
        }

        for(let b of t) {
            hashT[b] = hashT[b] + 1 || 1
        }

        for(let a of s) {
            if(hashS[a] !== hashT[a]) return false;
        }

        return true;
    }
}
