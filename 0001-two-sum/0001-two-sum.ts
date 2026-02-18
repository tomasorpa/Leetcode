function twoSum(nums: number[], target: number): number[] {
    let map={}
        let index=0
    for(let num of nums){
        let numberNeeded=target-num
        if(numberNeeded in map){
            return [index,map[numberNeeded]]
        }
         map[num]=index
        index++
    }
};