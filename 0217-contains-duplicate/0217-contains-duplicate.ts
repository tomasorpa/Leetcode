function containsDuplicate(nums: number[]): boolean {
    let map=new Map<number,boolean>()
    for (let num of nums){
        if(map.has(num)){
            return true
        }
        map.set(num,true)
    }
    return false
};