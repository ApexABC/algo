function isValidSudoku(board: string[][]): boolean {
  // 测试行
  for (const item of board) {
    const map: Record<string, string> = {}
    for (const i of item) {
      if (i === '.') continue
      else if (!map[i]) map[i] = i
      else return false
    }
  }
  const tmt: string[][][] = [
    [[], [], []],
    [[], [], []],
    [[], [], []]
  ]
  // 测试列
  for (let i = 0; i < 9; i++) {
    const map: Record<string, string> = {}
    for (let j = 0; j < 9; j++) {
      // 收集3*3
      let rVal = i / 3
      let CVal = j / 3
      let rPosition
      let cPosition
      if (rVal < 1) rPosition = 0
      else if (rVal < 2) rPosition = 1
      else rPosition = 2
      if (CVal < 1) cPosition = 0
      else if (CVal < 2) cPosition = 1
      else cPosition = 2
      if (board[i][j] !== '.') tmt[rPosition][cPosition].push(board[i][j])

      if (board[j][i] === '.') continue
      else if (!map[board[j][i]]) map[board[j][i]] = board[j][i]
      else return false
    }
  }
  // 测试3 * 3
  for (const item of tmt.flat()) {
    const map: Record<string, string> = {}
    for (const i of item) {
      if (!map[i]) map[i] = i
      else return false
    }
  }
  return true
}
console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
  ])
)
console.log(
  isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
  ])
)
