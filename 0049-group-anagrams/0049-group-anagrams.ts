function groupAnagrams(strs: string[]): string[][] {
    let map:Record<number,string[]>={}
    for (let word of strs){
        let result:number[]=Array(26).fill(0)
        for (let char of word){
            let index=char.charCodeAt(0)-"a".charCodeAt(0)
            result[index]+=1
        }
        let anagram:string=result.join("#")
        if(!(anagram in map)){
            map[anagram]=[]
        }
        map[anagram].push(word)
    }
    return Object.values(map)
};