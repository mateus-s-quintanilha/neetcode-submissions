class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = [];

        const visitedAnans = {}

        for(let i = 0; i < strs.length; i++) {
            const anan1 = strs[i];
            const anansFound = [strs[i]]
            const anan1Sorted = anan1.split('').sort().join('');

            if(anan1Sorted in visitedAnans) continue;

            for(let j = i+1; j < strs.length; j++) {
                const anan2 = strs[j];
                const anan2Sorted = anan2.split('').sort().join('');

                if(anan1Sorted === anan2Sorted) {
                    anansFound.push(strs[j])
                }
            }

            visitedAnans[anan1Sorted] = true;
            res.push(anansFound)
        }

        return res;
    }
}
