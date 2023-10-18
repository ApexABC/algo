import { swap, testSort } from './utils'
import { measureSort } from 'hy-algokit'
// 冒泡
function bubbleSorting(arr: number[] = []): number[] {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        swapped = true
      }
    }
    if (!swapped) break
  }
  return arr
}
// 选择
function selectionSort(arr: number[]): number[] {
  const n = arr.length

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i
    for (let j = 1 + i; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    // 小优化
    if (i !== minIndex) {
      swap(arr, i, minIndex)
    }
  }
  return arr
}
// 插入排序
function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    // 内层循环
    let newNum = arr[i]
    let j = i - 1
    while (arr[j] > newNum && j >= 0) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = newNum
  }
  return arr
}
// 归并排序
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr
  // 分割
  const mid = Math.floor(arr.length / 2)
  const leftArry = arr.slice(0, mid)
  const rightArry = arr.slice(mid)
  const newLeftArry = mergeSort(leftArry)
  const newRightArry = mergeSort(rightArry)

  // 合并
  let i = 0
  let j = 0
  const newArry: number[] = []
  while (i < newLeftArry.length && j < newRightArry.length) {
    if (newLeftArry[i] <= newRightArry[j]) {
      newArry.push(newLeftArry[i])
      i++
    } else {
      newArry.push(newRightArry[j])
      j++
    }
  }
  // 处理剩余
  if (i < newLeftArry.length) {
    newArry.push(...newLeftArry.slice(i))
  }
  if (j < newRightArry.length) {
    newArry.push(...newRightArry.slice(j))
  }

  return newArry
}
function quickSort(arr: number[]): number[] {
  partition(0, arr.length - 1)
  function partition(left: number, rigth: number) {
    if (left >= rigth) return
    const pivot = arr[rigth]
    let i = left
    let j = rigth - 1
    while (i <= j) {
      // 找到一个比pivot大的元素
      while (arr[i] < pivot) {
        i++
      }
      // 找到一个比pivot小的元素
      while (arr[j] > pivot) {
        j--
      }
      if (i <= j) {
        swap(arr, i, j)
        i++
        j--
      }
    }
    // 将pivot放到正确位置
    swap(arr, i, rigth)
    // 继续划分左边区域
    partition(left, j)
    // 继续划分右边区域
    partition(i + 1, rigth)
  }
  return arr
}
// testSort(quick)
// measureSort(quickSort, 100000)
