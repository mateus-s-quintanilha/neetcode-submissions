class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(!strs.length) return null
        if(strs.length == 1) return strs[0]

        let res = ""
        for(let i = 0; i < strs.length; i++) {
            let str = strs[i]
            res += str.length + '#' + str 
        }

        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str == null) return []
        if(str === "") return [""]
        if(!str.includes('#')) return [str]

        console.log('str: ', str)
        let decoded = []
        let i = 0
        while(i < str.length) {
            let j = i
            while(j < str.length && str[j] !== '#') {
                j++
            }
            
            let len = ""
            for(let k = i; k < j; k++) {
                len += str[k]
            }

            let word = ""
            for(let l = j+1; l < (j+1) + Number(len); l++) {
                word += str[l]
            }
            // if(word.length) decoded.push(word)
            decoded.push(word)
            i = (j+1) + Number(len)
        }

        console.log('decoded aq: ', decoded)
        if(decoded.length === 0) return [str] 

        return decoded
    }
}
