import IList from './IList'
interface IQueue<T> extends IList<T> {
  enqueue(element: T): void

  dequeue(): T | undefined
}

export default IQueue
