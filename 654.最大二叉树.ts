/*
import { indexOf } from '../../../../Applications/MAMP/htdocs/云客代码/client-ydjy-backend/dist/tinymce/plugins/codemirror/codemirror-5.40.2/src/util/misc';
 * @lc app=leetcode.cn id=654 lang=typescript
 *
 * [654] 最大二叉树
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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  function helper(arr) {
    if (!arr.length) return null
    let max = Math.max(...arr)
    let index = arr.indexOf(max)
    let left = arr.slice(0, index)
    let right = arr.slice(index + 1, arr.length)
    let leftNode = left.length ? helper(left) : null
    let rightNode = right.length ? helper(right) : null
    return new TreeNode(max, leftNode, rightNode)
  }
  return helper(nums)
}
// @lc code=end
