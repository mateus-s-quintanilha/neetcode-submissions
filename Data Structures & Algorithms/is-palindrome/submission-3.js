class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const charsToIgnore = {
            '?': true,
            '!': true,
            ' ': true,
            '.': true,
            ',': true,
            "'": true,
            ":": true,
            ";": true,
            "+": true,
            "-": true,
            "&": true,
            "$": true,
        }
        let p1 = 0
        let p2 = s.length - 1

        while(p1 <= p2-1) {
            let char1 = s[p1].toLowerCase()
            let char2 = s[p2].toLowerCase()
            if(char1 in charsToIgnore) {
                p1++
                continue
            }

            if(char2 in charsToIgnore) {
                p2--
                continue
            }

            console.log({char1, char2, comparison: char1 === char2})
            if(char1 !== char2) return false
            // console.log(char1, char2);
            p1++
            p2--
        }

        return true
    }
}
