class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null
  const head = new ListNode()
  let headCurNode = head
  let curMinVal = Number.MAX_SAFE_INTEGER
  if (lists.every((node) => node === null)) return null
  while (!lists.every((node) => node === null)) {
    lists.forEach((node) => {
      if (node && node?.val < curMinVal) {
        curMinVal = node.val
      }
    })
    for (let [index, node] of lists.entries()) {
      if (node?.val === curMinVal) {
        headCurNode.val = node.val
        lists[index] = node.next
        if (lists.every((node) => node === null)) break
        const newNode = new ListNode()
        headCurNode.next = newNode
        headCurNode = headCurNode.next
      }
    }
    curMinVal = Number.MAX_SAFE_INTEGER
  }
  return head
}
const L2 = new ListNode(4, null)
const L1 = new ListNode(3, L2)
const head = new ListNode(1, L1)

const K2 = new ListNode(4, null)
const K1 = new ListNode(2, K2)
const head2 = new ListNode(1, K1)

const C2 = new ListNode(4, null)
const C1 = new ListNode(2, C2)
const head3 = new ListNode(0, null)
// console.log(mergeKLists([head, head2]))
console.log(mergeKLists([head3]))

export {}
