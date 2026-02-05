function wordPattern(pattern: string, s: string): boolean {
        let words:string[]=[]
        let word:string=""
    for(let i=0;i<=s.length;i++){
        if(i===s.length||s[i]===" "){
            if(word.length>0){
            words.push(word)
            word=""
            }
        }else{
        word+=s[i]
        }
    }
    if(pattern.length!==words.length) return false
    let charToWord=new Map<string,string>()
    let wordToChar=new Map<string,string>()

    for(let i=0;i<pattern.length;i++){
        let word=words[i]
        let char=pattern[i]
        if (charToWord.has(char) && charToWord.get(char) !== word) return false
        if (wordToChar.has(word) && wordToChar.get(word) !== char) return false
        charToWord.set(char,word)
        wordToChar.set(word,char)
    }
    return true
};
