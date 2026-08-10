class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length === 1) return [strs];

        const anagramIdxInList = new Object();
        const res = [];

        for(let i = 0; i < strs.length; i++) {
            const currI = strs[i].split('').sort().join('');

            if(currI in anagramIdxInList) {
                const anagIdx = anagramIdxInList[currI];
                res[anagIdx].push(strs[i]);
            } else {
                res.push([strs[i]]);
                anagramIdxInList[currI] = res.length-1;
            }
        };

        return res
    };
}


// ["atc","pots","tops","cat","stop","hat"]