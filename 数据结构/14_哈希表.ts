class HashTable<T = any> {
  // 创建一个数组，用来存放链地址中的链（数组）
  storage: [string, T][][] = []
  // 定义数组的长度
  private length = 7
  // 记录已经存放元素的个数
  private count = 0
  // 哈希函数
  private hashFunc(key: string, max: number) {
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
  // 判断是否质数
  private isPrime(num: number): boolean {
    // 平方根
    const sqrt = Math.sqrt(num)
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }
  // 增容&缩容
  private resize(newLength: number) {
    // 设置新长度
    let newPrime = newLength
    while (!this.isPrime(newPrime)) {
      newPrime++
    }
    if (newPrime < 7) newPrime = 7
    this.length = newPrime
    // 获取原来的所有数据，并且重新放入到新的容量数组中
    // 1.对数据进行初始化操作
    const oldStorage = this.storage
    this.storage = []
    this.count = 0

    // 2.获取原来的数据,放入到新的数组中
    oldStorage.forEach((bucket) => {
      if (!bucket) return
      for (let i = 0; i < bucket.length; i++) {
        const tuple = bucket[i]
        this.put(tuple[0], tuple[1])
      }
    })
  }

  // 插入&修改
  put(key: string, value: T) {
    // 根据key获取数组中对应的索引值
    const index = this.hashFunc(key, this.length)
    // 取出索引值对应位置的数组（桶）
    let bucket = this.storage[index]
    // 判断bucket是否有值
    if (!bucket) {
      bucket = []
      this.storage[index] = bucket
    }
    // 确定已经有一个数组了，但数组中是否已经存在key是不确定的
    let isUpdate = false
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      const tupleKey = tuple[0]
      if (tupleKey === key) {
        // 覆盖的操作
        tuple[1] = value
        isUpdate = true
      }
    }
    // 如果上面的代码配有进行覆盖，那么在该位置进行添加
    if (!isUpdate) {
      bucket.push([key, value])
      this.count++
      // 如果loadFactor比例已经大于0.75,那么就直接扩容
      const loadFactor = this.count / this.length
      if (loadFactor > 0.75) {
        this.resize(this.length * 2)
      }
    }
  }
  // 获取值
  get(key: string): T | undefined {
    // 根据key获取索引值
    const index = this.hashFunc(key, this.length)
    // 获取桶
    const bucket = this.storage[index]
    if (!bucket) return undefined
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      const tupleKey = tuple[0]
      if (tupleKey === key) {
        return tuple[1]
      }
    }
    return undefined
  }
  // 删除值
  delete(key: string): T | undefined {
    const index = this.hashFunc(key, this.length)
    const bucket = this.storage[index]
    if (!bucket) return undefined
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      const tupleKey = tuple[0]
      const tupleValue = tuple[1]
      if (tupleKey === key) {
        bucket.splice(i, 1)
        this.count--
        // 如果loadFactor小于0.25可以进行缩容
        if (this.count / this.length < 0.25 && this.length > 7) {
          this.resize(Math.floor(this.length / 2))
        }
        return tupleValue
      }
    }
    return undefined
  }
}

const hashTable = new HashTable()
// hashTable.put('aaa', 111)
hashTable.put('aaa', 222)
hashTable.put('bbb', 333)
hashTable.put('ccc', 444)
console.log(hashTable.storage)
hashTable.put('ddd', 333)
hashTable.put('eee', 444)
hashTable.put('fff', 444)
hashTable.put('ggg', 444)
hashTable.put('hhh', 444)
console.log(hashTable.storage)
export default hashTable
