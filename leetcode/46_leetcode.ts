function permute(nums: number[]): number[][] {
  const n = nums.length
  const res: number[][] = []
  function dfs(haveNum: number[]) {
    if (haveNum.length === n) return res.push(haveNum)
    const surArr = nums.filter((item) => !haveNum.includes(item))
    surArr.forEach((item) => {
      const newArr = haveNum.slice()
      newArr.push(item)
      dfs(newArr)
    })
  }
  dfs([])
  return res
}

console.log(permute([1, 2, 3]))
// console.log(permute([1, 1, 2]))
console.log(permute([1, 0]))
