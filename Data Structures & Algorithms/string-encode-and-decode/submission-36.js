class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    criptoKey = '%$#'
    
    encode(strs) {
        
        const encodedStr = strs.join(this.criptoKey);
        console.log({encodedStr})
        if(!strs.length) return '-1';
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str === '-1') return [];

        const decodedStr = str.split(this.criptoKey)
        // console.log({decodedStr})
        return decodedStr;
    }
}
