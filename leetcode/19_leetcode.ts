class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let NodeLength = 1;
  let curNode = head;
  while (curNode?.next) {
    curNode = curNode.next;
    NodeLength++;
  }
  const step = NodeLength - n;
  if (step === 0) {
    return head?.next as null | ListNode;
  }
  let needOptionNode = head;
  let perNeedOpNode = null;
  for (let i = 0; i < step; i++) {
    perNeedOpNode = needOptionNode;
    needOptionNode = needOptionNode?.next as null | ListNode;
  }
  if (perNeedOpNode === null) return head;
  perNeedOpNode!.next = needOptionNode?.next as null | ListNode;
  return head;
}
// const L3 = new ListNode(3, null);
// const L2 = new ListNode(2, L3);
// const L1 = new ListNode(1, L2);
const head = new ListNode(1, null);
console.log(removeNthFromEnd(head, 1));
export {};
