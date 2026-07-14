const openMap = {
    '(': ')',
    '{': '}',
    '[': ']',
}
const closeMap = {
    ')': '(',
    '}': '{',
    ']': '[',
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length === 1 || s.length % 2 !== 0) return false

        const stack = new Array();

        for(let i = 0; i < s.length; i++) {
            const curr = s[i];
            if(curr in openMap) {
                stack.push(openMap[curr])
            } else if(curr in closeMap) {
                if(curr !== stack.pop()) return false;
                continue;
            }
        }

        return stack.length === 0;
    }
}
