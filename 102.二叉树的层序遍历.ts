/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
/**
 * 层序遍历
 */
function levelOrder(root: TreeNode | null): number[][] {
  let res = []
  let subres = []
  if (!root) return res
  let quene: TreeNode[] = [root]
  while (quene.length) {
    // 关键，存储当前quene长度
    const len = quene.length
    for (let i = 0; i < len; i++) {
      let node = quene.shift()
      subres.push(node.val)
      node.left && quene.push(node.left)
      node.right && quene.push(node.right)
    }
    res.push(subres)
    subres = []
  }
  return res
}
// @lc code=end
