    const nonAlphaNum = {
        "?": true,
        "!": true,
        ".": true,
        ",": true,
        ";": true,
        ":": true,
        "_": true,
        "'": true,
        " ": true,
    }

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length-1;

        s = s.toLowerCase();

        while(l <= r) {
            if(s[r] in nonAlphaNum) {
                r--
                continue;
            }

            if(s[l] in nonAlphaNum) {
                l++
                continue;
            }

            const isEqual = s[r] === s[l];
            if(!isEqual) return false;
            l++;
            r--;
        }

        return true;
    }
}

// "Was it a car or a cat I saw?"
