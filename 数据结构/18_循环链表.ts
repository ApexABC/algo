import LinkedList from './08_链表结构'

class CircularLinkedList<T> extends LinkedList<T> {
  append(value: T): void {
    super.append(value)
    this.tail!.next = this.head
  }
  insert(value: T, position: number): boolean {
    const isSucess = super.insert(value, position)
    if (isSucess && (position === this.length - 1 || position === 0)) {
      this.tail!.next = this.head
    }
    return isSucess
  }
  removeAt(position: number): T | null {
    const value = super.removeAt(position)
    if (value && this.tail && (position === 0 || position === this.length)) {
      this.tail.next = this.head
    }
    return value
  }
}
// const cLinkedList = new CircularLinkedList<string>()
// cLinkedList.append('aaa')
// cLinkedList.append('bbb')
// cLinkedList.append('ccc')
// cLinkedList.insert('ddd', 3)
// cLinkedList.insert('000', 0)
// cLinkedList.insert('bc', 3)
// cLinkedList.removeAt(3)
// cLinkedList.removeAt(4)
// cLinkedList.removeAt(0)
// console.log(cLinkedList.indexOf('aaa'))

// cLinkedList.traverse()
export {}
