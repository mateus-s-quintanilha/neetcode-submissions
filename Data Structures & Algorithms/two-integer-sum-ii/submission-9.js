class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        if(numbers.length === 2) return numbers.map((_, i) => i+1);
        
        const targetIdx = numbers.length - 1;

        let p1 = 0;
        let p2 = targetIdx

        while(p1 < p2) {
            let n1 = numbers[p1];
            let n2 = numbers[p2];

            const sum = n1 + n2

            if(sum === target) {
                return [p1+1, p2+1];
            }

            // if(sum > target) {
            //     p2--;
            //     continue;
            // }

            // if(sum < target) {
            //     p1++
            //     continue;
            // }

            sum > target ? p2-- : p1++;
        }
    }
}
