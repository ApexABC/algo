import Heap from './20_堆结构'
class PriorityNode<T> {
  priority: number
  value: T
  constructor(value: T, priority: number) {
    this.priority = priority
    this.value = value
  }
  valueOf() {
    return this.priority
  }
}
class PriorityQueue<T> {
  private heap: Heap<PriorityNode<T>> = new Heap()
  enqueue(value: T, priority: number) {
    const newNode = new PriorityNode(value, priority)
    this.heap.insert(newNode)
  }
  dequeue(): T | undefined {
    return this.heap.extract()?.value
  }
  peek(): T | undefined {
    return this.heap.peek()?.value
  }
  isEmpty() {
    return this.heap.isEmpty()
  }
  size() {
    return this.heap.size()
  }
}

const pQueue = new PriorityQueue<string>()

pQueue.enqueue('aaa', 90)
pQueue.enqueue('bbb', 98)
pQueue.enqueue('ccc', 100)
// console.log(pQueue.heap)
while (!pQueue.isEmpty()) {
  console.log(pQueue.dequeue())
}
export {}
