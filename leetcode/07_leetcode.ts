function reverse(x: number): number {
  let newXArry = x.toString().split('')
  let isMinus = false
  if (newXArry[0] === '-') {
    isMinus = true
    newXArry.shift()
  }
  const reversed: string[] = newXArry.reverse()
  if (reversed[0] === '0') reversed.shift()
  if (isMinus) reversed.unshift('-')
  const finnal = Number(reversed.join(''))
  if (finnal > Math.pow(2, 31) - 1 || finnal < -Math.pow(2, 31)) {
    return 0
  }
  return finnal
}
console.log(reverse(1534236469))
console.log(Math.pow(2, 31) - 1, -Math.pow(2, 31))
