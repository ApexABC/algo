import { ArrayStack } from './01_栈结构'

function effBracket(Bracket: string): boolean {
  const stack = new ArrayStack<string>()
  for (let i = 0; i < Bracket.length; i++) {
    const c = Bracket[i]
    if (c === '(') {
      stack.push(')')
    } else if (c === '[') {
      stack.push(']')
    } else if (c === '{') {
      stack.push('}')
    } else {
      if (c !== stack.pop()) return false
    }
  }
  return true
}

console.log(effBracket('({})()[][{]'))

export {}
