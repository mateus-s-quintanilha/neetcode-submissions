class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    _minWindow(s, t) {
        if(t.length > s.length) return "";

        const tMap = {};
        for(let i = 0; i < t.length; i++) {
            tMap[t[i]] = (tMap[t[i]] ?? 0) + 1; 
        };


        let minSubstr = ""

        let tMapCp = JSON.parse(JSON.stringify(tMap));
        for(let i = 0; i < s.length; i++) {
            if(minSubstr !== "" && !tMap[s[i]]) continue;
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

        return minSubstr;
    }

    minWindow(s, t) {
        let shortSubstr = "";
        if(t.length > s.length) return shortSubstr;

        const tMap = new Object();
        for(let i = 0; i < t.length; i++) {
            tMap[t[i]] = (tMap[t[i]] ?? 0) + 1; 
        };

        
        for(let l = 0; l < s.length; l++) {
            if(!tMap[s[l]]) continue;
            let tMapCp = structuredClone(tMap)
            let tMapCount = t.length;
            
            let r = l;
            while(r < s.length) {
                const char = s[r]
                if(char in tMapCp) {
                    tMapCp[char] = tMapCp[char] - 1
                    if(tMapCp[char] === 0) delete tMapCp[char];
                    tMapCount--

                    // console.log({char, tMapCp, tMapCount, shortSubstr, l, r})
                    if(tMapCount === 0) {
                        if(shortSubstr === "") {
                            shortSubstr = s.substring(l, r+1);
                        } else {
                            shortSubstr = shortSubstr.length > (r-l)+1 ? s.substring(l, r+1) : shortSubstr;
                        }
                        break
                    }
                } 
                r++
            }
        }

        console.log({shortSubstr})
        return shortSubstr;
    }
}

// OUZODYXAZV
// XYZ

