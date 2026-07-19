class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        if (target.length === 1) return 1;

        let positionMap = {};

        for (let i = 0; i < position.length; i++) {
            positionMap[position[i]] = speed[i];
        }

        position.sort((a, b) => a - b);

        const stack = [];

        stack.push(
            (target - position[position.length - 1]) / positionMap[position[position.length - 1]],
        );

        for (let i = position.length - 2; i >= 0; i--) {
            const speed = positionMap[position[i]];
            const timeToArrive = (target - position[i]) / speed;

            const isGonnaFleet = timeToArrive <= stack[stack.length - 1];

            if (!isGonnaFleet) {
                stack.push(timeToArrive);
            }
        }

        return stack.length;
    }
}

// position = [1,4]
// speed =    [3,2]

// 1 -> 4 -> 7 -> 10
// 4 -> 6 -> 8 -> 10

// [  ]
