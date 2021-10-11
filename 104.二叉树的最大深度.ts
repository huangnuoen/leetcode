/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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
 * 广度遍历
 * 利用quene来记录深度
 */
function maxDepth1(root: TreeNode | null): number {
  let deep = 0
  if (!root) return deep
  let quene = [root]
  while (quene.length) {
    let len = quene.length
    for (let i = 0; i < len; i++) {
      const node = quene.shift()
      node.left && quene.push(node.left)
      node.right && quene.push(node.right)
    }
    deep++
  }
  return deep
}
/**
 * 深度遍历
 * 递归遍历到叶子节点，更新maxDeep
 * 终止：没有左右节点
 * 执行：每深入一层 deep加一
 */
function maxDepth(root: TreeNode | null): number {
  let max = 0
  if (!root) return max
  function helper(node, deep) {
    if (!node.left && !node.right) {
      max = Math.max(max, deep)
      return
    }
    node.left && helper(node.left, deep + 1)
    node.right && helper(node.right, deep + 1)
  }
  helper(root, 1)
  return max
}

// @lc code=end
