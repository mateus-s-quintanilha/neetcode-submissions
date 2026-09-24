const isNonAlphanum = {
    "": true,
    " ": true,
    "'": true,
    '"': true,
    ',': true,
    '.': true,
    '!': true,
    '?': true,
    ';': true,
    ':': true,
};

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
        let l = 0;
        let r = s.length-1;

        while(l < r) {
            while(s[l] in isNonAlphanum) l++;
            while(s[r] in isNonAlphanum) r--;
        
            if(s[l] !== s[r]) return false;

            l++;
            r--;
        };

        return true;
    }
}
