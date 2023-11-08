function threeSumClosest(nums: number[], target: number): number {
  nums = nums.sort((a, b) => a - b);
  const n = nums.length;
  let i = 0;
  let minGap = nums[0] + nums[1] + nums[2] + target;
  while (i < n) {
    let L = i + 1;
    let R = n - 1;
    let cur = nums[i] + nums[L] + nums[R] + target;

    minGap = Math.min(Math.abs(cur), minGap);

    i++;
  }
  return 0;
}
