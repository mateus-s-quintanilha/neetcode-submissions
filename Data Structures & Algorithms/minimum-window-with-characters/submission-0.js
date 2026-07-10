class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length > s.length) return "";

        const tMap = {};
        for(let i = 0; i < t.length; i++) {
            tMap[t[i]] = (tMap[t[i]] ?? 0) + 1; 
        };


        let minSubstr = ""

        let tMapCp = JSON.parse(JSON.stringify(tMap));
        for(let i = 0; i < s.length; i++) {
            tMapCp = JSON.parse(JSON.stringify(tMap));
            let j = i
            while(j < s.length) {
                const char = s[j];
                if(char in tMapCp) {
                    tMapCp[char] = tMapCp[char] - 1;
                    if(tMapCp[char] === 0) delete tMapCp[char]; 

                    if(Object.keys(tMapCp).length === 0) {
                        if(minSubstr === "") {
                            minSubstr = s.substring(i, j+1)
                        } else {
                            const len = (j - i) + 1;
                            if (len < minSubstr.length) {
                                minSubstr = s.substring(i, j+1);
                            }
                        }
                    }
                };
                j++
            }
        }

        // console.log({minSubstr})
        return minSubstr;
    }
}

//     i
// OUZODYXAZV
// XYZ