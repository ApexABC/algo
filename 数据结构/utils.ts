export function swap(arr: number[], i: number, j: number) {
  ;[arr[j], arr[i]] = [arr[i], arr[j]]
}
function isSorted(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false
  }
  return true
}
// 测试工具
type SortAlgoFn = (arr: number[]) => number[]
export function testSort(sortFn: SortAlgoFn) {
  // 随机一个长度为10的数组
  const nums = Array.from({ length: 10 }, () => {
    return Math.floor(Math.random() * 200)
  })
  console.log('排序前的数组', nums)
  const newNums = sortFn(nums)
  console.log('排序后的数组', newNums)
  console.log('排序顺序是否正确', isSorted(newNums))
}
