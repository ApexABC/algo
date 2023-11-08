// function binarySearch(arr: number[], target: number, i?: number, j?: number): boolean {
//   let left = 0
//   let right = arr.length - 1
//   let current = -1
//   while (left <= right) {
//     if (arr[current] > target) {
//       right = current - 1
//     } else if (arr[current] < target) {
//       left = current + 1
//     } else if (arr[current] === target && i !== current && j !== current && i !== j) {
//       return true
//     } else if (arr[current] === target && (i === current || j === current || i === j)) {
//       return false
//     }
//     current = Math.floor((left + right) / 2)
//   }
//   return false
// }

// function threeSum(nums: number[]): number[][] {
//   nums = nums.sort((a, b) => a - b)
//   const n = nums.length
//   let finalArrJson: string[] = []
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 1; j < n; j++) {
//       let z = (nums[i] + nums[j]) * -1
//       if (z === -0) z = 0
//       const sortedJson = JSON.stringify([nums[i], nums[j], z].sort((a, b) => a - b))
//       if (binarySearch(nums, z, i, j)) {
//         finalArrJson.push(sortedJson)
//       }
//     }
//   }
//   finalArrJson = new Set(finalArrJson) as any
//   return Array.from(finalArrJson).map((item) => JSON.parse(item))
// }

function threeSum(arr: number[]): number[][] {
  arr = arr.sort((a, b) => a - b);
  const n = arr.length;
  let pArr: any[] = [];
  let i = 0;
  while (arr[i] <= 0) {
    let L = i + 1;
    let R = n - 1;
    while (L < R) {
      if (arr[i] + arr[L] + arr[R] === 0) {
        pArr.push([arr[i], arr[L], arr[R]]);
        if (L < R && arr[L] === arr[L + 1]) {
          L++;
        }
        if (L < R && arr[R] === arr[R - 1]) {
          R--;
        }
        L++;
        R--;
      } else if (arr[i] + arr[L] + arr[R] < 0) {
        L++;
      } else if (arr[i] + arr[L] + arr[R] > 0) {
        R--;
      }
    }
    i++;
  }
  pArr = pArr.map((item) => JSON.stringify(item));
  pArr = new Set(pArr) as any;
  pArr = Array.from(pArr).map((item) => JSON.parse(item));
  return pArr;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
