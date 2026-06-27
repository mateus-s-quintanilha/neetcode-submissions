class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Object();
        const sArr = s.split('')
        const tArr = t.split('')
        
        for(const numS of sArr) {
            if(map[numS]) {
                map[numS] += 1
            } else {
                map[numS] = 1
            }
        }

        for(const numT of tArr) {
            if(map[numT]) {
                map[numT] -= 1;
                if(map[numT] <= 0) delete map[numT]; 
            } else {
                return false;
            }
        }

        console.log('e aq')

        return Object.keys(map).length === 0;
    }
}
