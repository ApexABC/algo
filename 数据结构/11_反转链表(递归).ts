import ListNode from './面试题_ListNode'
function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head
  const newHead = reverseList(head.next ?? null)
  head.next.next = head
  head.next = null
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
