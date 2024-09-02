class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}
function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []
  function recur(node: TreeNode) {
    if (node) {
      recur(node.left!)
      res.push(node.val)
      recur(node.right!)
    }
  }
  if (root) recur(root)
  return res
}
const three = new TreeNode(3)
const right = new TreeNode(2, three, undefined)
const root = new TreeNode(1, undefined, right)
console.log(inorderTraversal(root))
export {}
