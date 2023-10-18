import ListNode from './面试题_ListNode'
function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head
  // 反转链表结构
  let newHead: ListNode | null = null
  while (head) {
    let current: ListNode = head.next!
    head.next = newHead
    newHead = head
    head = current
  }
  return newHead
}
const node1 = new ListNode(0)
node1.next = new ListNode(1)
node1.next.next = new ListNode(2)

let newHead = reverseList(node1)
// let current = newHead
while (newHead) {
  console.log(newHead.val)
  newHead = newHead.next
}
export {}
