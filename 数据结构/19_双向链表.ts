import LinkedList from './08_链表结构'
import { DoublyNode } from './IDoublyNode'
class DoublyLinkedList<T> extends LinkedList<T> {
  protected head: DoublyNode<T> | null = null
  protected tail: DoublyNode<T> | null = null
  append(value: T): void {
    const newNode = new DoublyNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail!.next = newNode
      // 不能将一个父类的对象赋值给一个子类的类型
      // 可以将一个子类的对象赋值给一个父类的类型（多态）
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.size++
  }
  prepend(value: T): void {
    const newNode = new DoublyNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.size++
  }
  postTraverse() {
    const value: T[] = []
    let current = this.tail
    while (current) {
      value.push(current.value)
      current = current.prev
    }
    console.log(value.join('-> '))
  }
  insert(value: T, position: number): boolean {
    if (position < 0 && position > this.length) return false
    if (position === 0) {
      this.prepend(value)
    } else if (position === this.length) {
      this.append(value)
    } else {
      const newNode = new DoublyNode(value)
      let current = this.getNode(position) as DoublyNode<T>
      let preCurrent = this.getNode(position - 1) as DoublyNode<T>
      current.prev = newNode
      newNode.next = current
      newNode.prev = preCurrent
      preCurrent.next = newNode
      this.size++
    }
    return true
  }
  removeAt(position: number): T | null {
    if (position < 0 || position >= this.length) return null
    let current = this.head
    if (position === 0) {
      if (this.size === 1) {
        this.head = null
        this.tail = null
      } else {
        this.head = this.head?.next!
        this.head.prev = null
      }
    } else if (position === this.length - 1) {
      current = this.tail
      this.tail = this.tail?.prev!
      this.tail.next!.prev = null
    } else {
      current = this.getNode(position) as DoublyNode<T>
      current!.next!.prev = current?.prev!
      current!.prev!.next = current?.next!
    }
    this.size--
    return current?.value ?? null
  }
}

const dLinkedList = new DoublyLinkedList<string>()
dLinkedList.append('aaa')
dLinkedList.append('bbb')
dLinkedList.append('ccc')
dLinkedList.prepend('000')
dLinkedList.traverse()
dLinkedList.postTraverse()
// dLinkedList.insert('ddd', 3)
dLinkedList.removeAt(0)
dLinkedList.traverse()
dLinkedList.postTraverse()
