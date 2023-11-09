interface IHash {
  [index: string]: string[];
}
function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [""];
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
  const arr = [];
  for (const item of digits) {
    arr.push(hash[item]);
  }
  const strArr: string[] = [];
  function combine(str: string, arr: string[]) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      strArr!.push(str + arr[i]);
    }
  }
  // if (digits.length === 2) {
  //   for (let i = 0; i < 1; i++) {
  //     const innerN = arr[i].length;
  //     for (let j = 0; j < innerN; j++) {
  //       combine(arr[i][j], arr[i + 1]);
  //     }
  //   }
  // }
  for (let i = 0; i < 1; i++) {
    const innerN = arr[i].length;
    for (let j = 0; j < innerN; j++) {
      combine(arr[i][j], arr[i + 1]);
    }
  }
  console.log(strArr);

  return [""];
}
letterCombinations("23");
