/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    _minMeetingRooms(intervals) {
        if(intervals.length <= 1) return intervals.length

        intervals.sort((a, b) => a.start - b.start)

        let neededDays = 1
        let days = []
        days.push([intervals[0].end])
        console.log(days)
        for(let i = 1; i < intervals.length; i++) {
            let { start, end } = intervals[i]
            let wasInserted = false
            for(let meetings of days) {
                if(meetings[meetings.length-1] > start) continue
                meetings.push(end)
                wasInserted = true
            }

            if(!wasInserted) days.push([end])
        }

        console.log('days: ', days)
        return days.length
    }
    
        minMeetingRooms(intervals) {
        if(intervals.length <= 1) return intervals.length

        intervals.sort((a, b) => a.start - b.start)

        // let neededDays = 1
        let days = []
        days.push(intervals[0].end)
        console.log(days)
        for(let i = 1; i < intervals.length; i++) {
            let { start, end } = intervals[i]
            let earliest = Math.min(...days)
            
            if(start < earliest) {
                days.push(end)
            } else {
                days[days.indexOf(earliest)] = end
            }
        }

        // console.log('days: ', days)
        return days.length
    }
}
