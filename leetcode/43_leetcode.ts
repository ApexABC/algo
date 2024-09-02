function multiply(num1: string, num2: string): string {
  const num1Length = num1.length
  const num2Length = num2.length
  const res = new Array(num1Length + num2Length).fill(0)
  for (let i = num2Length - 1; i >= 0; i--) {
    for (let j = num1Length - 1; j >= 0; j--) {
      const muti = +num2[i] * +num1[j] + res[i + j + 1]
      const p1 = muti % 10
      const p2 = (muti / 10) | 0
      res[i + j + 1] = p1
      res[i + j] += p2
    }
  }
  const r = res.join('').replace(/^0*/, '')
  return r.length === 0 ? '0' : r
}

console.log(multiply('123', '456'))
console.log(multiply('111', '111'))
console.log(multiply('999', '999'))
console.log(multiply('456', '789'))
console.log(multiply('0', '0'))
