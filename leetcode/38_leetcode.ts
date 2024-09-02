function countAndSay(n: number): string {
  if (n === 1) return '1'
  let target = ''
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      target = '1'
      continue
    }
    let targetN = target.length
    let thisTarget = ''
    for (let j = 0; j < targetN; j++) {
      let jTime = 1
      while (target[j] === target[j + 1]) {
        jTime += 1
        j++
      }
      thisTarget += `${jTime}${target[j]}`
    }
    target = thisTarget
  }
  return target
}

console.log(countAndSay(30))
