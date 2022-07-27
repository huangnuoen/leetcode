/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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

function isValidBST(root: TreeNode | null): boolean {
  let arr = []
  let isVaild = true
  function helper(node) {
    if (node.left) {
      helper(node.left)
    }
    node.val !== null && arr.push(node.val)
    if (node.right) {
      helper(node.right)
    }
  }
  helper(root)
  if (arr.length <= 1) return true
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) continue
    isVaild = false
    break
  }
  return isVaild
}
// @lc code=end
