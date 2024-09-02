function searchRange(nums: number[], target: number): number[] {
  const length = nums.length
  let l = 0
  let r = length - 1
  function getFirstTargetIndex() {
    while (l <= r) {
      const mid = Math.floor((l + r) / 2)
      if (nums[mid] < target) {
        l = mid + 1
      } else if (nums[mid] > target) {
        r = mid - 1
      } else {
        return mid
      }
    }
  }
  const targetIndex = getFirstTargetIndex()
  if (targetIndex === undefined) return [-1, -1]
  const res: number[] = []
  let curIndex = targetIndex
  // 找左边
  while (nums[curIndex - 1] === nums[targetIndex] && curIndex !== 0) {
    curIndex -= 1
  }
  res[0] = curIndex
  // 找右边
  while (nums[curIndex + 1] === nums[targetIndex] && curIndex !== length - 1) {
    curIndex += 1
  }
  res[1] = curIndex
  return res
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([1], 1))
console.log(searchRange([2, 2], 2))
