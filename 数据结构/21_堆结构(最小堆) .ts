class Heap<T> {
  data: T[] = []
  private length: number = 0
  constructor(value: T[] = []) {
    if (value.length !== 0) this.buildHeap(value)
  }
  private swap(i: number, j: number) {
    const temp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp
  }
  // 上滤操作
  private heapify_up() {
    let index = this.length - 1
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      if (this.data[index] >= this.data[parentIndex]) {
        break
      }
      this.swap(index, parentIndex)
      index = parentIndex
    }
  }

  insert(value: T) {
    // 将元素添加到数组尾部
    this.data.push(value)
    this.length++

    this.heapify_up()
  }
  private heapify_down(start: number) {
    // 下滤操作
    let index = start
    while (index * 2 + 1 < this.length) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
      let largeIndex = leftChildIndex
      if (rightChildIndex < this.length && this.data[leftChildIndex] > this.data[rightChildIndex]) {
        largeIndex = rightChildIndex
      }
      // 较大的值和index位置进行比较
      if (this.data[index] <= this.data[largeIndex]) {
        break
      }
      // 交换位置
      this.swap(index, largeIndex)
      index = largeIndex
    }
  }
  extract(): T | undefined {
    if (this.length === 0) return undefined
    if (this.length === 1) {
      this.length--
      return this.data.pop()
    }
    // 提取并返回最大值
    const topVal = this.data[0]
    this.data[0] = this.data.pop()!
    this.length--

    this.heapify_down(0)
    return topVal
  }

  peek(): T | undefined {
    return this.data[0]
  }

  size() {
    return this.length
  }

  isEmpty() {
    return this.length === 0
  }

  buildHeap(arr: T[]) {
    this.data = arr
    this.length = this.data.length
    // 获取第一个叶子节点，然后进行下滤操作
    const start = Math.floor((this.length - 1) / 2)
    for (let i = start; i >= 0; i--) {
      this.heapify_down(i)
    }
  }
}
const arr = [45, 11, 20, 56, 23, 9]
const heap = new Heap(arr)
// arr.forEach((item) => {
//   heap.insert(item)
// })
// console.log(heap.data)
// const arr = [19, 100, 36, 17, 3, 25, 1, 2, 7]
// arr.forEach((item) => {
//   heap.insert(item)
// })
// console.log(heap.data)
// while (!heap.isEmpty()) {
//   console.log(heap.extract())
// }
// console.log(heap.extract())
// console.log(heap.data)
console.log(arr)

export {}
