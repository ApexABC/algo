function fib(n: number): number {
  if (n <= 1) return n
  // 定义状态和初始化状态
  let prev = 0
  let cur = 1
  for (let i = 2; i <= n; i++) {
    let newValue = prev + cur
    prev = cur
    cur = newValue
  }
  return cur
}
console.log(fib(99))
