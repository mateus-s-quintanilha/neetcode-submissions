class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0) return '-1';
        const len = strs.length
        let uuid = '&0'; 
        for(let i = 1; i <= len; i++) {
            uuid += `&${i}`
        }

        const encoded = strs.join(uuid).concat(`&${len}`);
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str === '-1') return []

        const splitted = str.split('&')
        const len = splitted[splitted.length-1]

        let uuid = '&0';
        for(let i = 1; i <= len; i++) {
            uuid += `&${i}`
        }

        const decoded = str.substring(0, str.length - (len.length + 1)).split(uuid);
        return decoded
    }
}
