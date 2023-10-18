import ListNode from './面试题_ListNode'
function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) return null
  // 只有一个head节点
  if (head.next === null) return head
  // 数组模拟栈结构
  const stack: ListNode[] = []
  let current: ListNode | null = head
  while (current) {
    stack.push(current)
    current = current.next
  }
  // 从栈中取出元素，放到一个新链表中
  const newHead: ListNode = stack.pop()!
  let newHeadCurrent = newHead
  while (stack.length) {
    const node = stack.pop()!
    newHeadCurrent.next = node
    newHeadCurrent = newHeadCurrent.next
  }
  // 栈结构中存储的是对象，最后一个元素是之前第一个元素next是有指向的，所以要清空
  newHeadCurrent.next = null
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
