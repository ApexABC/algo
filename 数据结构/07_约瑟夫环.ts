import ArrayQueue from './05_队列结构'

function circle(num: number, time: number) {
  const queue = new ArrayQueue()
  for (let i = 0; i < num; i++) {
    queue.enqueue(i)
  }
  while (queue.size() !== 1) {
    for (let i = 0; i < time; i++) {
      if (i === time - 1) {
        queue.dequeue()
        if (queue.size() === 1) {
          return queue.peek()
        }
      } else {
        const value = queue.dequeue()
        queue.enqueue(value)
      }
    }
  }
}
console.log(circle(5, 3))
