class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        if(position.length === 1) return 1;

        const posToSpeedMap = {};

        for(let i = 0; i < position.length; i++) {
            const spd = speed[i];
            const pos = position[i];

            posToSpeedMap[pos] = spd;
        };

        position.sort((a, b) => b-a);

        const stack = [];
        stack.push(
            (target - position[0]) / posToSpeedMap[position[0]]
        )
        for(let i = 1; i < position.length; i++) {
            const currPos = position[i];
            const timeToArrive = (target - currPos) / posToSpeedMap[currPos];
            const isGoingToFleet = timeToArrive <= stack[stack.length-1];

            if(!isGoingToFleet) {
                stack.push(timeToArrive);
            }

        }

        console.log({stack})

        return stack.length;
    }
}

// target = 10
// position =  [0,4,2]
// speed =     [2,1,3]

// [4,2,0]

// [6]

