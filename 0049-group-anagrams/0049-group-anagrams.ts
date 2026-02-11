function groupAnagrams(strs: string[]): string[][] {
    const map:Record<string,string[]>={}
    for (const word of strs){
        const count:number[]=new Array(26).fill(0)
        for (const char of word){
            const index=char.charCodeAt(0)-"a".charCodeAt(0)
            count[index]++
        }
        const key:string=count.join("#")
        if(!(key in map)) {
            map[key]=[]
            }
        map[key].push(word)
    }
    return Object.values(map)
};