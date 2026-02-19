function isPalindrome(s: string): boolean {
    let palindrome=s.replace(/[^a-z0-9]/gi,"").toLowerCase()
    let left=0
    let right=palindrome.length-1
    while(left<right){
        if(palindrome[left]!==palindrome[right]) return false
        left++
        right--
    }
    return true
};