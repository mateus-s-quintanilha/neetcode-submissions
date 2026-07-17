class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
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
}


// [30,38,30,36,35,40,28]
// [01,04,01,02,01,00,00]