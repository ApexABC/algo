export class ArrayStack<T> {
  private data: T[] = []

  // 压栈
  push(element: T): void {
    this.data.push(element)
  }
  // 弹出栈顶元素
  pop(): T | undefined {
    return this.data.pop()
  }
  // 看一眼栈顶元素
  peek(): T | undefined {
    return this.data[this.data.length - 1]
  }
  isEmpty(): boolean {
    return this.data.length === 0
  }
  size(): number {
    return this.data.length
  }
}

const stack1 = new ArrayStack<string>()
stack1.push('aaa')
stack1.push('bbb')

// console.log(stack1.peek())

export {}
