class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const sMap = {};
        for(let sLetter of s) {
            sMap[sLetter] = (sMap[sLetter] ?? 0) + 1;
        };

        for(let tLetter of t) {
            if(!sMap[tLetter]) return false;

            sMap[tLetter] = sMap[tLetter] - 1;
            if(sMap[tLetter] === 0) delete sMap[tLetter] 
        };

        return Object.keys(sMap).length === 0;
    }
}
