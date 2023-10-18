// function maxArea(height: number[]): number {
//   const n = height.length
//   let cMax = 0
//   let max = 0
//   let current = 0
//   let next = 0
//   for (let i = 0; i < n; i++) {
//     console.log(i);

//     // current = height[i]
//     // for (let j = i + 1; j < n; j++) {
//     //   let width = j - i
//     //   next = height[j]
//     //   let CHeight = Math.min(current, next)
//     //   cMax = width * CHeight
//     //   max = Math.max(max, cMax)
//     // }
//   }
//   return max
// }
function maxArea(height: number[]): number {
  let left = 0
  let right = height.length - 1
  let s = 0
  let max = 0
  while (left < right) {
    s = (right - left) * Math.min(height[left], height[right])
    max = Math.max(s, max)
    if (height[left] > height[right]) {
      right--
    } else {
      left++
    }
  }
  return max
}
