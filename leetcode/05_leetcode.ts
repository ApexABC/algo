function longestPalindrome(s: string): string {
  const n = s.length
  let maxLenght = 0
  let maxStr = ''
  for (let i = 0; i < n; i++) {
    let left = i - 1
    let right = i + 1
    let curStr = s[i]
    let length = 1
    while (s[i] === s[right] && s[right] !== undefined) {
      curStr += s[i]
      length++
      right++
    }
    while (s[left] === s[right] && s[right] !== undefined && s[left] !== undefined) {
      curStr = s[left] + curStr + s[right]
      length += 2
      left--
      right++
    }
    if (length > maxLenght) {
      maxLenght = length
      maxStr = curStr
    }
  }
  return maxStr
}

console.log(longestPalindrome('ccd'))
console.log(longestPalindrome('aaa'))
console.log(longestPalindrome('babad'))
