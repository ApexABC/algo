class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null) return head;
  let perNode = null;
  let curNode = head;
  let nextNode = curNode?.next;
  while (nextNode) {
    if (curNode?.next === null) return head;
    curNode.next = nextNode.next;
    nextNode.next = curNode;
    if (perNode === null) {
      head = nextNode;
      perNode = curNode;
    } else perNode.next = nextNode;

    perNode = curNode;
    curNode = curNode.next!;
    if (curNode === null) return head;
    nextNode = curNode.next;
  }

  return head;
}

const L5 = new ListNode(6, null);
const L4 = new ListNode(5, null);
const L3 = new ListNode(4, L4);
const L2 = new ListNode(3, L3);
const L1 = new ListNode(2, L2);
const head = new ListNode(1, L1);
console.log(swapPairs(head));

export {};
