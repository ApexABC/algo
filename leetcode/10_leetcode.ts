// function isMatch(s: string, p: string | any): boolean {
//   let index = 0
//   let pIndex = 0
//   while (index < s.length || pIndex < p.length) {
//     let curValue = s[index]
//     let pPerValue = p[pIndex - 1] || ''
//     let PCurValue = p[pIndex]
//     let pNexValue = p[pIndex + 1] || ''
//     if (PCurValue === '.') {
//       if (!curValue) return false
//       index++
//       pIndex++
//       continue
//     } else if (PCurValue === '*') {
//       if (pNexValue === curValue) {
//         if (curValue === pPerValue) {
//           p = p.split('')
//           p.splice(pIndex + 1, 1)
//           p = p.join('')
//           continue
//         }
//       }
//       if (pPerValue === curValue) {
//         index++
//         continue
//       } else if (pPerValue === '.') {
//         if (pNexValue !== '' && curValue === pNexValue) {
//           pIndex++
//           continue
//         } else if (pNexValue !== '' && curValue !== pNexValue) {
//           if (!s[index + 1]) return false
//           index++
//           continue
//         } else if (pNexValue === '') {
//           return true
//         }
//       } else if (pPerValue !== curValue) {
//         pIndex++
//         continue
//       }
//     }
//     if (curValue !== PCurValue && pNexValue === '*') {
//       pIndex += 2
//       continue
//     }

//     if (curValue === PCurValue) {
//       index++
//       pIndex++
//       if (!s[index] && p[pIndex] === '*') {
//         console.log(1)
//         return isMatch(s[index - 1], p[pIndex + 1])
//       }
//       // 如果s全部匹配完毕但p还有剩余
//       if (index === s.length - 1 && p.length - 1 > pIndex && p.indexOf('*', pIndex) !== -1) {
//         let pGap = p.length - 1 - p.lastIndexOf('*')
//         let newS = s.slice(-pGap)
//         let newP = p.slice(-pGap)
//         return isMatch(newS, newP)
//       }
//     } else {
//       return false
//     }
//   }

//   return true
// }

function isMatch(s: string, p: string): boolean {
  const n = s.length
  const m = p.length
  const dp: boolean[][] = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false))
  dp[0][0] = true
  for (let j = 2; j <= m; j++) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2]
    }
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1]
      }
      if (p[j - 1] === '*') {
        if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
          // 匹配0 1 或多个  能匹配上就当前状态为真了
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j]
        } else {
          // 完全不相等不匹配
          dp[i][j] = dp[i][j - 2]
        }
      }
    }
  }
  return dp[n][m]
}

// console.log(isMatch('aaa', 'a*a'))
// console.log(isMatch('adfqwrqwqw', 'a.*f.*w.q.*qw'))
// console.log(isMatch('aab', 'c*a*b'))
// console.log(isMatch('aaa', 'ab*a*c*a'))
// console.log(isMatch('ba', '.*a*a'))
// console.log(isMatch('a', 'a*a'))
console.log(isMatch('ab', '.*..'))
