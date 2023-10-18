function romanToInt(s: string): number {
  let newS = s
  let num = 0
  interface IHash {
    [index: string]: number
  }
  const hash: IHash = {
    CM: 900,
    M: 1000,
    CD: 400,
    D: 500,
    XC: 90,
    C: 100,
    XL: 40,
    L: 50,
    IX: 9,
    X: 10,
    IV: 4,
    V: 5,
    I: 1
  }
  for (const key in hash) {
    while (newS.includes(key)) {
      num = hash[key] + num
      newS = newS.replace(key, '')
    }
  }
  return num
}
romanToInt('XX')
