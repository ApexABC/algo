function searchInsert(nums: number[], target: number): number {
  let L = 0
  let R = nums.length - 1
  let curPosition = -1
  while (L <= R) {
    curPosition = Math.floor((L + R) / 2)
    if (target > nums[curPosition]) {
      L = curPosition + 1
    } else if (target < nums[curPosition]) {
      R = curPosition - 1
    } else if (target === nums[curPosition]) {
      return curPosition
    }
  }
  if (nums[curPosition] > target) return curPosition
  else return curPosition + 1
}
// console.log(Array.from({ length: 100 }, (_, i) => i + 1))
// console.log(, 0)
// console.log(
//   searchInsert(
//     Array.from({ length: 100 }, (_, i) => i + 1),
//     1
//   )
// )

console.log(searchInsert([1, 3], -20))
