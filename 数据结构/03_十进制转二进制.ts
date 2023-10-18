import { ArrayStack } from './01_栈结构'
function decToBin(dec: number): string {
  const stack = new ArrayStack<number>()

  while (dec > 0) {
    const result = dec % 2
    stack.push(result)

    dec = Math.floor(dec / 2)
  }
  let binary = ''
  while (!stack.isEmpty()) {
    binary += stack.pop()
  }
  return binary
}

console.log(decToBin(35))

export {}
