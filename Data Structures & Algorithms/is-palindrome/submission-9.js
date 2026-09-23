    const isNonAlphanum = {
        " ": true,
        "": true,
        ",": true,
        ".": true,
        "!": true,
        "?": true,
        "'": true,
        '"': true,
        ':': true,
        ';': true,
    }

class Solution {


    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0
        let r = s.length - 1;

        s = s.toLowerCase()

        while(l < r) {
            while(s[l] in isNonAlphanum) l++;
            
            while(s[r] in isNonAlphanum) r--;

            if(s[r] !== s[l]) return false;

            l++
            r--
        }

        return true;
    };
}

//     l                 r
// Was it a car or a cat I saw?
