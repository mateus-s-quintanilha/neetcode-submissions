class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */

    // brute force
    _dailyTemperatures(temperatures) {
        if(temperatures.length === 1) return [0]
        const result = Array(temperatures.length).fill(null); 

        for(let i = 0; i < temperatures.length; i++) {
            const currTemp = temperatures[i];

            let j = i+1;
            while(j < temperatures.length) {
                const futureTemp = temperatures[j];
                if(futureTemp > currTemp) {
                    result[i] = j-i;
                    break;
                };
                j++
            }

            if(result[i] === null) result[i] = 0;
        };
     
        return result;
    }

    dailyTemperatures(temperatures) {
        if(temperatures.length === 1) return [0]
        const result = Array(temperatures.length).fill(null); 

        const stack = [[temperatures[0],0]];

        for(let i = 1; i < temperatures.length; i++) {
            const currTemp = temperatures[i];
            
            while(stack.length > 0 && currTemp > stack[stack.length-1][0]) {
                let idxToSet = stack[stack.length-1][1];
                result[idxToSet] = i - idxToSet; 
                stack.pop();
            };

            stack.push([currTemp, i]);
        }

        for(let [_, i] of stack) {
            result[i] = 0;
        }
        
        return result;
    }
}


// [30,38,30,36,35,40,28]

[1,4,1,2,1,null,null]

[[40,5], [28,6]]

