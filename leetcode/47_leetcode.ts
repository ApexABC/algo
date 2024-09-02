function permuteUnique(nums: number[]): number[][] {
  const n = nums.length
  const res: number[][] = []
  nums.sort((a, b) => a - b)
  const used = new Array(n).fill(false)
  function dfs(haveNum: number[]) {
    if (haveNum.length === n) return res.push(haveNum)
    for (let i = 0; i < n; i++) {
      if (used[i]) continue
      if (i > 0 && !used[i - 1] && nums[i] === nums[i - 1]) continue // !used[i - 1]保证了在used[i - 1]被使用过的条件下，nums[i] === nums[i - 1]不会让下一个相同的去continue
      const newArr = haveNum.slice()
      used[i] = true
      newArr.push(nums[i])
      dfs(newArr)
      used[i] = false
    }
  }
  dfs([])
  return res
}

console.log(permuteUnique([1, 2, 3]))
console.log(permuteUnique([1, 1, 2]))
console.log(permuteUnique([1, 0]))
