class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        if (numbers.length === 2) return numbers.map((_, i) => i + 1);

        let p1 = 0;
        let p2 = numbers.length[numbers.length-1] >= target ? target-1 : numbers.length-1;

        while (p1 < p2) {
            const sum = numbers[p1] + numbers[p2];

            if (sum === target) {
                return [p1 + 1, p2 + 1];
            }

            sum > target ? p2-- : p1++;
        }
    }
}
