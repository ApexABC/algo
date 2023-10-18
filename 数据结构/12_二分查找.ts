function binarySearch(array: number[], num: number): number {
  // 定义左索引和右索引
  let left = 0
  let right = array.length - 1
  let current = -1
  while (left <= right) {
    current = Math.floor((left + right) / 2)
    if (array[current] > num) {
      right = current - 1
    } else if (array[current] < num) {
      left = current + 1
    } else if (array[current] === num) {
      return current
    }
  }
  return -1
}

console.log(binarySearch([1, 2, 3, 5, 7, 9], 9))
export {}
