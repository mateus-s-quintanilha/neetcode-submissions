class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        if(target.length === 1) return 1;
    
        let positionMap = {};

        for(let i = 0; i < position.length; i++) {
            positionMap[position[i]] = speed[i];
        };

        position.sort((a, b) => a-b);

        const stack = [];

        for(let i = position.length-1; i >= 0; i--) {
            // console.log('===============================================')
            const speed = positionMap[position[i]];
            const timeToArrive = (target - position[i]) / speed;
            // console.log('step 1', {positionI: position[i], speed, timeToArrive})

            if(i === position.length -1) {
                stack.push(timeToArrive)
                // console.log('step 2', {positionI: position[i], stack})
            } else {
                const isGonnaFleet = timeToArrive <= stack[stack.length-1];
                // console.log('step 3', {positionI: position[i], isGonnaFleet})
                
                if(!isGonnaFleet) {
                    stack.push(timeToArrive)
                    // console.log('step 4', {positionI: position[i], stack})
                }
            }
        }

        // console.log({positionMap, stack, position})
        return stack.length
    }
}


// position = [1,4] 
// speed =    [3,2]

// 1 -> 4 -> 7 -> 10
// 4 -> 6 -> 8 -> 10 

// [  ]
