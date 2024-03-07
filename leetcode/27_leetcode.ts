function removeElement(nums: number[], val: number): number {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    while (nums[i] === val) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
}
console.log(removeElement([2, 2, 0, 1, 2, 2, 3, 0, 4, 2], 2));
