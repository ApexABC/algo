function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b)
  const res: number[][] = []
  const n = candidates.length
  function dfs(target: number, combine: number[], index: number) {
    if (index > n) return
    if (target === 0) {
      res.push(combine)
      return
    }
    if (target - candidates[index] >= 0) {
      dfs(target - candidates[index], [...combine, candidates[index]], index + 1)
    }
    let myIndex = index
    let time = 1
    while (myIndex < n && candidates[myIndex] === candidates[myIndex + 1]) {
      myIndex++
      time++
    }
    dfs(target, combine, index + time)
  }
  dfs(target, [], 0)
  return res
}
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5, 8], 8))
console.log(combinationSum2([2, 5, 2, 1, 2], 5))
console.log(combinationSum2([1, 1], 1))
console.log(combinationSum2([1, 1], 2))

export {}
