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

        let l = 0;
        // find last open 
        while(l < s.length - 1 && s[l] in openMap) {
            let nxt = s[l+1]
            if(!openMap[nxt]) break;
            l++
        }

        // console.log({l, sL: s[l]})
        // return true;
    }

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

// "([{}])"

// [ ), ], } ]