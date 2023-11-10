class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getValue(list: ListNode | null, val: number[]) {
  if (list === null) return;
  let cur = list;
  while (cur.next) {
    val.push(cur.val);
    cur = cur.next;
  }
  val.push(cur.val);
}
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const val: number[] = [];
  getValue(list1, val);
  getValue(list2, val);
  if (val.length === 0) return null;
  val.sort((a, b) => a - b);
  const n = val.length;
  const newNode = new ListNode();
  let curNode = newNode;
  for (let i = 0; i < n; i++) {
    curNode.val = val[i];
    if (i === n - 1) break;
    curNode.next = new ListNode();
    curNode = curNode.next;
  }
  return newNode;
}
// const L3 = new ListNode(3, null);
const L2 = new ListNode(4, null);
const L1 = new ListNode(3, L2);
const head = new ListNode(1, L1);

const K2 = new ListNode(4, null);
const K1 = new ListNode(2, K2);
const head2 = new ListNode(1, K1);
console.log(mergeTwoLists(head, head2));

export {};
