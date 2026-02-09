function containsDuplicate(nums: number[]): boolean {
    let map:Record<number,number>={}
    for (let num of nums){
        if(num in map){
            return true
        }
        map[num]=num


    }
    return false
};