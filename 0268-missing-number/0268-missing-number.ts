function missingNumber(nums: number[]): number {
    let totalSum:number=(nums.length*(nums.length+1))/2
    let actualSum:number=nums.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
    return totalSum-actualSum
};