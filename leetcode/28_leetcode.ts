function strStr(haystack: string, needle: string): number {
  // return haystack.indexOf(needle);
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] === needle[j]) {
          if (needle.length === j + 1) return i;
          continue;
        } else {
          break;
        }
      }
    }
  }
  return -1;
}
console.log(strStr("mississippi", "mississippi"));
export {};
