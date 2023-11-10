interface IHash {
  [index: string]: string[];
}
function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];
  const hash: IHash = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };
  if (digits.length === 1) return hash[digits];
  const arr: string[][] = [];
  for (const item of digits) {
    arr.push(hash[item]);
  }
  const res: string[] = [];
  function dfs(str: string, index: number) {
    if (index === digits.length) {
      res.push(str);
      return;
    }
    const curHash = arr[index];
    for (const curStr of curHash) {
      dfs(str + curStr, index + 1);
    }
  }
  dfs("", 0);
  return res;
}
console.log(letterCombinations(""));
