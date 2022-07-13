/*
 * @lc app=leetcode.cn id=404 lang=typescript
 *
 * [404] 左叶子之和
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

function sumOfLeftLeaves(root: TreeNode | null): number {
  let sum = 0
  function helper(node: TreeNode, isLeft) {
    if (node.left) {
      helper(node.left, true)
    }
    if (isLeft && !node.left && !node.right && node.val) {
      sum += node.val
    }
    if (node.right) {
      helper(node.right, false)
    }
  }
  helper(root, false)
  return sum;
}
// @lc code=end
