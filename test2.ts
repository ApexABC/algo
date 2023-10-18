function setArry<T>(arr: T[]) {
  const newArry: T[] = []
  const n = arr.length
  let i = 0
  while (i < n) {
    if (!newArry.includes(arr[i])) {
      newArry.push(arr[i])
    }
    i++
  }
  return newArry
}

console.log(setArry<number>([1, 2, 3, 1, 1, 2, 4, 5, 6, 4, 4, 5]))
