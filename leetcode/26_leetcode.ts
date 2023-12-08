function removeDuplicates(nums: number[]): number {
  const t = [...new Set(nums)];
  const n = t.length;
  for (let i = 0; i < n; i++) {
    nums[i] = t[i];
  }
  nums.splice(n);
  return n;
}
const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(arr));
console.log(arr);

export {};
