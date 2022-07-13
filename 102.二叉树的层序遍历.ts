/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
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
  */
/**
 * 层序遍历
 */
function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  let res: number[][] = []
  let quene: TreeNode[] = []
  quene.push(root)
  while (quene.length) {
    const len = quene.length
    const arr: number[] = []
    for (let i = 0; i < len; i++) {
      const node = quene.shift()
      node.val !== null && arr.push(node.val)
      node.left !== null && quene.push(node.left)
      node.right !== null && quene.push(node.right)
    }
    res.push(arr)
  }
  return res
}
// @lc code=end
