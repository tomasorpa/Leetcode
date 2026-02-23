function topKFrequent(nums: number[], k: number): number[] {
  let map={}
    for (let num of nums){
        if(!(num in map)){
        map[num]=0
        } 
        map[num]++
    }
    let bucket=Array.from({length:nums.length+1},()=>[])
    for(let element in map){
        let frequency=map[element]
        bucket[frequency].push(element)
    }
    let result=[]
    for(let i=bucket.length-1;i>=0;i--){
        for(let num of bucket[i]){
            result.push(Number(num))
        if(result.length==k) return result
        }
    }
    
    return result
}