import ArrayQueue from './05_队列结构'
function deliver(array: string[], time: number): any {
  const AQueue = new ArrayQueue<string>()
  for (const item of array) {
    AQueue.enqueue(item)
  }
  while (AQueue.size() !== 1) {
    for (let i = 0; i < time; i++) {
      if (i === time - 1) {
        AQueue.dequeue()
        if (AQueue.size() === 1) {
          const value = AQueue.dequeue()
          const index = array.indexOf(value!)
          return {
            value,
            index
          }
        }
      } else {
        const value = AQueue.dequeue()
        AQueue.enqueue(value!)
      }
    }
  }
}
const testArray = ['abc', 'bcd', 'aaa', 'ccc', 'ddd']
const value = deliver(testArray, 2)
console.log(value)
