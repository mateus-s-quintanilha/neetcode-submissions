class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        const sSort = s.split('').sort().join('')
        const tSort = t.split('').sort().join('')

        // console.log('olha: ', sSort, tSort)

        return sSort === tSort
    }
}
