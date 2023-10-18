import ListNode from '../数据结构/面试题_ListNode'

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null || l2 === null) return null
  // 反转链表
  function reverseList(list: ListNode): ListNode {
    if (list === null || list.next === null) return list
    const newList = reverseList(list.next)
    list.next.next = list
    list.next = null
    return newList
  }
  const isReversedL1 = reverseList(l1)
  const isReversedL2 = reverseList(l2)
  // 将链表转化为数组
  function listConvertArray(list: ListNode | null): number[] {
    const nArray = []
    while (list) {
      nArray.push(list.val)
      list = list.next
    }
    return nArray
  }
  const l1Array = listConvertArray(isReversedL1)
  const l2Array = listConvertArray(isReversedL2)
  // 将数组转化成数字
  function arrayConvertNumber(array: number[]): bigint {
    const num = BigInt(array.join(''))
    return num
  }
  const num1 = arrayConvertNumber(l1Array)
  const num2 = arrayConvertNumber(l2Array)
  const newNum = num1 + num2
  // 将数字转化成链表
  function numConvertList(num: bigint): ListNode {
    const Nnum = num.toString().split('')
    let firstValue = parseInt(Nnum.shift()!)
    const head = new ListNode(firstValue)
    if (Nnum.length === 0) return head
    let current = head
    while (Nnum.length > 0) {
      current.next = new ListNode(parseInt(Nnum.shift()!))
      current = current.next!
    }
    return head
  }
  const endList = numConvertList(newNum)
  const finallyList = reverseList(endList)
  return finallyList
}

const l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)
const l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)
console.log(addTwoNumbers(l1, l2))
// // let current = newHead
// while (newHead) {
//   console.log(newHead.val)
//   newHead = newHead.next
// }

export {}
