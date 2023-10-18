function isPrime(num: number): boolean {
  // 平方根
  const sqrt = Math.sqrt(num)
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
function areaPrime(max: number): number[] {
  const array = []
  for (let num = 2; num < max; num++) {
    let isPrime: boolean | undefined = true
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false
        break
      }
    }
    if (isPrime === true) {
      array.push(num)
    }
  }
  return array
}
console.log(isPrime(541))
console.log(areaPrime(1000))
