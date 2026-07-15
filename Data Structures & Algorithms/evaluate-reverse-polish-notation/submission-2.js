const operatorsMap = {
    '-': true,
    '+': true,
    '*': true,
    '/': true,
};

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []

        for(const item of tokens) {
            if(item in operatorsMap) {
                let n1 = stack.pop();
                let n2 = stack.pop();

                switch(item) {
                    case '+':
                        stack.push(n1 + n2)
                        break;
                    case '-':
                        stack.push(n2 - n1)
                        break;
                    case '*':
                        stack.push(n1 * n2)
                        break;
                    case '/':
                        stack.push(Math.trunc(n2 / n1))
                        break;
                }
            } else {
                stack.push(Number(item));
            }
        };

        return stack[0];
    };
}

