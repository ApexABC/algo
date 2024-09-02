function nextPermutation(nums: number[]): void {
  if (nums.length <= 1) return
  let i = nums.length - 2
  let j = nums.length - 1
  while (1) {
    if (nums[i] < nums[j]) {
      for (let a = nums.length - 1; a >= 0; a--) {
        if (nums[a] > nums[i]) {
          ;[nums[i], nums[a]] = [nums[a], nums[i]]
          reverseArr(nums, j, nums.length - 1)
          return
        }
      }
    }
    i--
    j--
    if (i < 0) {
      reverseArr(nums, 0, nums.length - 1)
      return
    }
  }
}
function reverseArr(arr: number[], start: number, end: number) {
  while (start <= end) {
    ;[arr[end], arr[start]] = [arr[start], arr[end]]
    start++
    end--
  }
}
const arr = [1, 3, 2]
nextPermutation(arr)
console.log(arr)

export {}
