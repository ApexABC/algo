function myAtoi(s: string): number {
  const trimedSArry = s.trim().split('')
  const rge = /[0-9]/
  const result = []
  let isMinus = false
  let index = 0
  if (trimedSArry[0] === '-' || trimedSArry[0] === '+') {
    if (trimedSArry[0] === '-') isMinus = true
    trimedSArry.shift()
  }
  while (index < trimedSArry.length) {
    if (trimedSArry[index].match(rge) !== null) {
      result.push(trimedSArry[index])
      index++
    } else {
      break
    }
  }
  while (result[0] === '0') {
    result.shift()
  }
  let finnalNum = Number(result.join(''))
  if (isMinus) finnalNum = finnalNum * -1
  if (finnalNum > Math.pow(2, 31) - 1) {
    finnalNum = Math.pow(2, 31) - 1
  }
  if (finnalNum < -Math.pow(2, 31)) {
    finnalNum = Math.pow(2, 31) * -1
  }
  return finnalNum
}
console.log(myAtoi('-91283472332'))
