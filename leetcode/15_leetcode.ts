function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return []
  nums.sort((a, b) => a - b)
  const n = nums.length
  const res: number[][] = []
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) break // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    let L = i + 1
    let R = n - 1
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R]
      if (sum === 0) {
        res.push([nums[i], nums[L], nums[R]])
        while (L < R && nums[L] === nums[L + 1]) L++ // 去重
        while (L < R && nums[R] === nums[R - 1]) R-- // 去重
        L++
        R--
      } else if (sum < 0) L++
      else if (sum > 0) R--
    }
    while (i < n && nums[i] === nums[i + 1]) {
      i++
    }
  }
  return res
}
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]))
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
