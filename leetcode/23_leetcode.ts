class ListNode {
  val: number | null;
  next: ListNode | null;
  constructor(val?: number | null, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;
  let arr = [];
  let curNode;
  for (const list of lists) {
    curNode = list;
    while (curNode?.next !== null) {
      arr.push(curNode?.val);
      curNode = curNode?.next;
    }
    if (curNode.val !== null) arr.push(curNode.val);
  }
  arr.sort((a, b) => a! - b!);
  const head = new ListNode();
  head.val = arr[0]!;
  let currentNode = head;
  for (let i = 1; i < arr.length; i++) {
    const newNode = new ListNode();
    newNode.val = arr[i]!;
    currentNode.next = newNode;
    currentNode = currentNode.next;
  }
  return head;
}
const L2 = new ListNode(4, null);
const L1 = new ListNode(3, L2);
const head = new ListNode(1, L1);

const K2 = new ListNode(4, null);
const K1 = new ListNode(2, K2);
const head2 = new ListNode(1, K1);

const C2 = new ListNode(4, null);
const C1 = new ListNode(2, C2);
const head3 = new ListNode(null, null);
console.log(mergeKLists([head, head2]));

export {};
