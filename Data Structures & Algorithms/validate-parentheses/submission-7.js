const openMap = {
    '(': ')',
    '{': '}',
    '[': ']',
}


class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length === 1 || s.length % 2 !== 0) return false

        const stack = new Array();

        for(const char of s) {
            if(char in openMap) {
                stack.push(openMap[char])
            } else {
                if(char !== stack.pop()) return false;
            }
        }

        return stack.length === 0;
    }
}
