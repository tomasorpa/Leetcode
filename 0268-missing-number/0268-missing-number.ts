function missingNumber(nums: number[]): number {
    let completedNums=new Map<number,boolean>()
    for (let num of nums){ 
        completedNums.set(num,true)
    }
    for (let i=0;i<nums.length+1;i++){
        if(!completedNums.has(i)) return i
    }
};