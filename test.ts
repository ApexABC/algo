import { measureSort } from 'hy-algokit'
import { swap, testSort } from './数据结构/utils'
function debounce(fn: (...args: any) => void, time: number) {
  let timer: any = null
  return function (this: any) {
    if (timer) {
      clearTimeout(timer)
    }
    const args: any = arguments
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, time)
  }
}
function throttle(fn: (...args: any) => void, time: number) {
  let timer: any = null
  return function (this: any) {
    if (timer) {
      return
    }
    const args: any = arguments
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, time)
  }
}
function foo(a = 2) {
  console.log(111)
  console.log('参数', a)
}
// const throttled = throttle(foo, 1000)
// const debounced = debounce(foo, 1000)
// let testInterTimer = setInterval(() => {
//   throttled()
//   // debounced()
// }, 200)
// setTimeout(() => {
//   clearInterval(testInterTimer)
// }, 5000)
function quickSort(arr: number[]): number[] {
  partition(0, arr.length - 1)
  function partition(left: number, right: number) {
    if (left >= right) return
    const pivot = arr[right]
    let i = left
    let j = right - 1
    while (i <= j) {
      while (arr[i] < pivot) {
        i++
      }
      while (arr[j] > pivot) {
        j--
      }
      if (i <= j) {
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
        i++
        j--
      }
    }
    ;[arr[right], arr[i]] = [arr[i], arr[right]]
    partition(left, j)
    partition(i + 1, right)
  }
  return arr
}
// console.log(quickSort([2, 5, 1, 78, 6, 9, 45, 21, 12, 22]))
interface IObj {
  [key: string]: any
  [index: number]: any
}
function deepClone(obj: IObj) {
  if (typeof obj !== 'object' || typeof obj == null) {
    return obj
  }
  let result: any
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }
  return result
}
// console.log(deepClone({ a: 1, aa: 3, c: { b: 'z' } }))
function bubbleSort(arr: number[]): number[] {
  const n = arr.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
  }
  return arr
}
console.log(testSort(bubbleSort))
