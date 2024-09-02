function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = []
  const n = candidates.length
  function dfs(target: number, combine: number[], index: number) {
    if (index >= n) return
    if (target === 0) {
      res.push(combine)
      return
    }
    if (target - candidates[index] >= 0) {
      dfs(target - candidates[index], [...combine, candidates[index]], index)
    }
    dfs(target, combine, index + 1)
  }
  dfs(target, [], 0)
  return res
}

console.log(combinationSum([2, 3, 6, 7], 7))

export {}
