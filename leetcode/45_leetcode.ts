function jump(nums: number[]): number {
  const n = nums.length
  let step = 0
  for (let i = 0; i < n - 1; ) {
    let curNum = nums[i]
    if (curNum + i >= n - 1) {
      step++
      break
    }
    let curMaxStep = 0
    let curMaxJ = i
    for (let j = i + 1; j < i + 1 + curNum; j++) {
      if (curMaxStep <= nums[j] + j) {
        curMaxStep = nums[j] + j
        curMaxJ = j
      }
    }
    step++
    i = curMaxJ
  }
  return step
}

console.log(jump([2, 3, 1, 1, 4]))
console.log(jump([2, 3, 0, 1, 4]))
console.log(jump([1, 4, 2, 1, 1, 1, 1, 1, 1, 1, 3, 1]))
console.log(jump([4, 1, 1, 3, 1, 1, 1]))
