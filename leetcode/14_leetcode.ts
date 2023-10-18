function longestCommonPrefix(strs: string[]): string {
  let s = strs[0]
  const n = strs.length
  if (n === 1) return s
  let L = s.length
  for (let i = 1; i < n; i++) {
    const cS = strs[i]
    let index = 0
    while (index <= s.length) {
      if (s[index] === cS[index]) {
        index++
        continue
      } else if (s[index] !== cS[index] && index === 0) {
        return ''
      } else {
        break
      }
    }
    L = Math.min(L, index)
  }
  return s.substring(0, L)
}
console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
console.log(longestCommonPrefix(['flower', 'flower', 'flower', 'flower']))
