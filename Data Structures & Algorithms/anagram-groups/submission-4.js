class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length <= 1) return [strs];

        const result = [];
        const anagIdxMap = {};
        const alreadyReadIdx = {}
        for(let i = 0; i < strs.length; i++) {
            const anag1 = strs[i].split('').sort().join('');
            
            if(anagIdxMap[anag1] === undefined) {
                result.push( [ strs[i] ] );
                anagIdxMap[anag1] = result.length - 1
            } else {
                continue
            }
            
            for(let j = i+1; j < strs.length; j++) {
                const anag2 = strs[j].split('').sort().join('');

                if(anag2 in anagIdxMap && alreadyReadIdx[j] === undefined ) {
                    const anagIdx = anagIdxMap[anag2]
                    result[anagIdx].push(strs[j]);
                    alreadyReadIdx[j] = true
                }
            }
        }

        return result;
    }
}
