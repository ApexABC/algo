// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//   let newArry: number[] = []

//   let isNums1 = true
//   while (!(nums1.length === 0 && nums2.length === 0)) {
//     // if (nums1[nums1.length - 1] > nums2[0]) {
//     //   isNums1 = false
//     //   break
//     // }
//     if (nums1[nums1.length - 1] <= nums2[0]) {
//       newArry = [...nums1, ...nums2]
//       break
//     }
//     if (isNums1) {
//       for (let index in nums1) {
//         if (nums1.length === 1) {
//           newArry = [...newArry, ...nums1]
//           nums1 = []
//           break
//         }
//         if (nums1[index] > nums2[0]) {
//           newArry = [...newArry, ...nums1.slice(0, Number(index))]
//           nums1.splice(0, Number(index))
//           break
//         }
//         if (nums1[index] === nums2[0]) {
//           newArry.push(nums1.shift()!)
//           console.log(1, newArry)
//           break
//         }
//       }

//       isNums1 = false
//     } else {
//       for (let index in nums2) {
//         if (nums2.length === 1) {
//           newArry = [...newArry, ...nums2]
//           nums2 = []
//           break
//         }
//         if (nums2[index] > nums1[0]) {
//           newArry = [...newArry, ...nums2.slice(0, Number(index))]
//           nums2.splice(0, Number(index))
//           break
//         }
//         if (nums2[index] === nums1[0]) {
//           newArry.push(nums2.shift()!)
//           console.log(2, newArry)
//           break
//         }
//       }
//       isNums1 = true
//     }
//   }
//   let minddle = 0
//   if (newArry.length % 2 === 0) {
//     minddle = newArry[Math.floor(newArry.length / 2)] + newArry[Math.floor(newArry.length / 2 - 1)]
//     minddle = minddle / 2
//   } else {
//     minddle = newArry[Math.floor(newArry.length / 2)]
//   }

//   return minddle
// }
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let newArry: number[] = [...nums1, ...nums2]
  function quickSort(arr: number[]): number[] {
    partition(0, arr.length - 1)
    function partition(left: number, rigth: number) {
      if (left >= rigth) return
      const pivot = arr[rigth]
      let i = left
      let j = rigth - 1
      while (i <= j) {
        // 找到一个比pivot大的元素
        while (arr[i] < pivot) {
          i++
        }
        // 找到一个比pivot小的元素
        while (arr[j] > pivot) {
          j--
        }
        if (i <= j) {
          ;[arr[j], arr[i]] = [arr[i], arr[j]]
          i++
          j--
        }
      }
      // 将pivot放到正确位置
      ;[arr[rigth], arr[i]] = [arr[i], arr[rigth]]
      // 继续划分左边区域
      partition(left, j)
      // 继续划分右边区域
      partition(i + 1, rigth)
    }
    return arr
  }
  newArry = quickSort(newArry)
  let minddle = 0
  if (newArry.length % 2 === 0) {
    minddle = newArry[Math.floor(newArry.length / 2)] + newArry[Math.floor(newArry.length / 2 - 1)]
    minddle = minddle / 2
  } else {
    minddle = newArry[Math.floor(newArry.length / 2)]
  }

  return minddle
}
// console.log(findMedianSortedArrays([1, 2, 3, 4, 7, 8, 9, 11], [5, 6, 10]))
// console.log(findMedianSortedArrays([1, 3], [2]))
// console.log(findMedianSortedArrays([1, 2], [3, 4]))
console.log(findMedianSortedArrays([2, 2], [3, 3]))
console.log(findMedianSortedArrays([3, 4], [1, 2]))
console.log(findMedianSortedArrays([2, 3, 4], [1, 2]))
console.log(findMedianSortedArrays([0, 1, 2, 3, 4], [1, 2]))
