function generateParenthesis(n: number): string[] {
  const totallyL = n * 2;
  const res: string[] = [];
  const arr: string[] = [];
  function dfs(i: number, L: number) {
    if (i === totallyL) {
      res.push(arr.join(""));
      return;
    }
    if (L < n) {
      arr[i] = "(";
      dfs(i + 1, L + 1);
    }
    if (i - L < L) {
      arr[i] = ")";
      dfs(i + 1, L);
    }
  }
  dfs(0, 0);
  return res;
}
console.log(generateParenthesis(5));

export {};
