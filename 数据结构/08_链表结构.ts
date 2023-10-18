// 节点
class Node<T> {
  value: T
  next: Node<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}

class LinkedList<T> {
  protected head: Node<T> | null = null
  protected size: number = 0
  protected tail: Node<T> | null = null
  get length() {
    return this.size
  }
  private isTail(node: Node<T>) {
    return this.tail === node
  }
  append(value: T) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        // 判断防止死循环
        if (this.isTail(current)) {
          break
        } else {
          current = current.next
        }
      }
      current.next = newNode
    }
    this.tail = newNode
    this.size++
  }
  // 遍历链表
  traverse() {
    const values: T[] = []
    let current = this.head
    while (current) {
      values.push(current.value)
      if (this.isTail(current)) {
        current = null
      } else {
        current = current.next
      }
    }
    if (this.head && this.tail?.next === this.head) {
      values.push(this.head.value)
    }
    console.log(values.join('-> '))
  }
  // 插入元素
  insert(value: T, position: number): boolean {
    if (position < 0 || position > this.size) return false

    const newNode = new Node(value)
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let current = this.head
      let previous: Node<T> | null = null
      let index = 0
      while (index++ < position && current) {
        previous = current
        current = current.next
      }
      newNode.next = current
      previous!.next = newNode
      //
      if (position === this.length) {
        this.tail = newNode
      }
    }
    this.size++
    return true
  }
  // 删除元素
  removeAt(position: number): T | null {
    if (position < 0 || position >= this.size) return null
    let current = this.head
    if (position === 0) {
      this.head = current!.next
      //
      if (this.length === 1) {
        this.tail = null
      }
    } else {
      let previous: Node<T> | null = null
      let index = 0
      while (index++ < position) {
        previous = current
        current = current!.next
      }
      previous!.next = current?.next ?? null
      //
      if (position === this.length - 1) {
        this.tail = previous
      }
    }
    this.size--
    return current?.value ?? null
  }
  remove(value: T): boolean {
    const index = this.indexOf(value)
    return !!this.removeAt(index)
  }
  // 获取元素
  get(position: number): T | null {
    if (position < 0 || position >= this.size) return null
    let current = this.head
    let index = 0
    while (index++ < position && current) {
      current = current?.next
    }
    return current?.value ?? null
  }
  // 获取节点
  getNode(position: number): Node<T> | null {
    if (position < 0 || position >= this.size) return null
    let current = this.head
    for (let i = 0; i < position; i++) {
      current = current?.next!
    }
    return current
  }
  // 更新元素
  updata(value: T, position: number): boolean {
    if (position < 0 || position >= this.size) return false
    let index = 0
    let current = this.head
    while (index++ < position && current) {
      current = current.next
    }
    if (current) current.value = value
    return true
  }
  // 根据元素返回索引
  indexOf(value: T): number {
    let current = this.head
    let index = 0
    while (current) {
      if (current.value === value) {
        return index
      }
      if (this.isTail(current)) {
        current = null
      } else {
        current = current.next
      }
      index++
    }
    return -1
  }
  // 判断链表是否为空
  isEmpty() {
    return this.size === 0
  }
}

// const linkedList1 = new LinkedList<string>()
// linkedList1.append('abc')
// linkedList1.append('bbb')
// linkedList1.append('ccc')
// linkedList1.insert('111', 0)
// linkedList1.insert('222', 2)

// console.log(linkedList1.removeAt(0))
// console.log(linkedList1.remove('abc'))
// console.log(linkedList1.length)

// console.log(linkedList1.get(3))
// linkedList1.updata('ddd', 3)
// console.log(linkedList1.indexOf(''))
// linkedList1.remove('')
// console.log(linkedList1.isEmpty())

// linkedList1.traverse()
export default LinkedList
