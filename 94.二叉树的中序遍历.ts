/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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

function inorderTraversal(root: TreeNode | null): number[] {
  let res = []
  function helper(node) {
    if (node) {
      if (node.left) {
        helper(node.left)
      }
      if (node.val) {
        res.push(node.val)
      }
      if (node.right) {
        helper(node.right)
      }
    }
  }
  helper(root)
  return res
}
// @lc code=end
