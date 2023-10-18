// key代表要转化的key  max数组的最大数值
function hashFun(key: string, max: number): number {
  // 生成hashCode
  let hashCode = 0
  const length = key.length
  for (let i = 0; i < length; i++) {
    hashCode = 31 * hashCode + key.charCodeAt(i)
  }
  // 求出索引值
  const index = hashCode % max
  return index
}
console.log(hashFun('abcde', 7))
