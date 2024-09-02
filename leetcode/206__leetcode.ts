class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
function reverseList(head: ListNode | null): ListNode | null {
  let preNode = null
  let curNode = head
  let tempNode = null
  while (curNode) {
    tempNode = curNode.next
    curNode.next = preNode
    preNode = curNode
    curNode = tempNode
  }
  return preNode
}
const L4 = new ListNode(5, null)
const L3 = new ListNode(4, L4)
const L2 = new ListNode(3, L3)
const L1 = new ListNode(2, L2)
const head = new ListNode(1, L1)
// console.log(head)

console.log(reverseList(head))
export {}
