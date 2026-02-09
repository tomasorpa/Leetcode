function isAnagram(s: string, t: string): boolean {
    let map:Record<string,number>={}
    if(s.length !== t.length) return false
    for (let char of s){
        if(char in map){
            map[char]=map[char]+1
        }else{
        map[char]=1
        }
    }
    for (let char of t){
        if(!map[char]) return false
        map[char]--
    }
    return true


};