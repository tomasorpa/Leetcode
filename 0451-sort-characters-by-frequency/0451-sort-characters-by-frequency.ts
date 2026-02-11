function frequencySort(s: string): string {
    let map:Record<string,number>={}
    for (let char of s){
        if(!(char in map)){
            map[char]=0
        }
        map[char]++
    }
    let bucket:string[][] = Array.from({ length: s.length + 1 }, () => []);//porque el +1?
    for (let char in map){
        bucket[map[char]].push(char)
    }
    let result=""
    for(let i=s.length;i>0;i--){
        for (let char of bucket[i]){
            result+=char.repeat(i)
        }
        
    }return result

};