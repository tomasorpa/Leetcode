/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let left=0
    for (let i=s.length-1;i>left;i--){
        let temp=s[left]
        s[left]=s[i]
        s[i]=temp
        left++
    }
 
};