class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s2.length < s1.length) return false;

        const mappedS1 = {};
        for(let i = 0; i < s1.length; i++) {
            const char = s1[i];

            mappedS1[char] = (mappedS1[char] ?? 0) + 1 
        }


        let copyMappedS1 = JSON.parse(JSON.stringify(mappedS1));
        // for(let i = 0; i < s2.length; i++) {
        //     const char = s2[i];
        //     console.log({char, charInCopy: char in copyMappedS1, copyMappedS1})
        //     if(char in copyMappedS1) {
        //         copyMappedS1[char] = copyMappedS1[char] - 1
        //         if(copyMappedS1[char] === 0) delete copyMappedS1[char]
    
        //         if(!Object.keys(copyMappedS1).length) return true
        //     } else {
        //         copyMappedS1 = JSON.parse(JSON.stringify(mappedS1));
        //     }
        // }

        let l = 0;
        let r = l;
        while(r < s2.length) {
            const char = s2[r];

            if(char in copyMappedS1) {
                copyMappedS1[char] = copyMappedS1[char] - 1
                if(copyMappedS1[char] === 0) delete copyMappedS1[char]

                if(!Object.keys(copyMappedS1).length) return true

                r++
            } else {
                l++
                r = l;
                copyMappedS1 = JSON.parse(JSON.stringify(mappedS1));
            }
        }

        return false;
    }
}


// { a: 1}
// l r
// dcda
