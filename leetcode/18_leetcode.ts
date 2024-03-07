function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let state1 = 0;
  let res: any = [];
  while (state1 < n - 3) {
    let state2 = state1 + 1;
    while (state2 < n - 2) {
      let L = state2 + 1;
      let R = n - 1;
      while (L < R) {
        const num = nums[state1] + nums[state2] + nums[L] + nums[R];
        if (num < target) {
          L++;
        } else if (num > target) {
          R--;
        } else {
          res.push([nums[state1], nums[state2], nums[L], nums[R]]);
          L++;
          R--;
        }
      }
      state2++;
    }
    state1++;
  }
  res = res.map((item: any) => JSON.stringify(item));
  res = new Set(res);
  res = Array.from(res).map((item: any) => JSON.parse(item));
  return res;
}
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));

// [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
