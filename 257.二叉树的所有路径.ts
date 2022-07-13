/*
 * @lc app=leetcode.cn id=257 lang=typescript
 *
 * [257] 二叉树的所有路径
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

function binaryTreePaths(root: TreeNode | null): string[] {
  let result: string[] = []
  if (!root) return result
  function helper(node, path: number[]) {
    if (node.left) {
      helper(node.left, [...path, node.val])
    }
    if (!node.left && !node.right) {
      path.push(node.val)
      const str = path.join('->')
      path.length > 0 && result.push(str)
    }
    if (node.right) {
      helper(node.right, [...path, node.val])
    }
  }
  helper(root, [])
  return result
}
// @lc code=end
