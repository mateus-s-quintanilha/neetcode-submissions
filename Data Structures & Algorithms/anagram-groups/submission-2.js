class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length <= 1) return [strs]
        const anagramsMapped = new Object();
        const result = [];

        for(let i = 0; i < strs.length; i++) {
            const str = strs[i]
            const anagram = str.split('').sort().join('');

            if(anagram in anagramsMapped) {
                const arrIdx = anagramsMapped[anagram];
                result[arrIdx].push(str)
            } else {
                result.push([str])
                anagramsMapped[anagram] = result.length-1;
            };
        };

        // console.log(result)
        return result;
    }
}
