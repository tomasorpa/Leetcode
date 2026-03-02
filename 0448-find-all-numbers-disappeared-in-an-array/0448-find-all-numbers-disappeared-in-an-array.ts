function findDisappearedNumbers(nums: number[]): number[] {
    let map=new Map()
    for(let num of nums){
        map.set(num,true)
    }
    let result=[]
    for (let i=1;i<=nums.length;i++){
        if(!map.has(i)) result.push(i)
    }
    return result
};