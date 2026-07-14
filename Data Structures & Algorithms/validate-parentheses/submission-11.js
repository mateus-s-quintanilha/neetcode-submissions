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
    // brute force
    isValid(s) {
        if(s.length === 1 || s.length % 2 !== 0) return false;

        let prevLen = -1

        while(prevLen !== s.length) {
            if(s.length === 0) return true
            prevLen = s.length

            s = s.replace('()', '')
            s = s.replace('[]', '')
            s = s.replace('{}', '')
        }

        return prevLen === 0;
    }

    _isValid(s) {
        if(s.length === 1 || s.length % 2 !== 0) return false;

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
