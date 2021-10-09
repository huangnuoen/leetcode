/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
/*  */
/**
 * 递归
 * 终止条件：左右括号都用完了
 * 有效括号的判定条件：
 * 1.可以先生成所有情况再去使用栈去判定是否有效
 * 2.直接在生成过程中判定有效
 */
function generateParenthesis(n: number): string[] {
  let res = []
  function _generate(left, right, str) {
    // 终止
    if (left === 0 && right === 0) {
      res.push(str)
      return
    }
    if (left) {
      _generate(left - 1, right, str + '(')
    }
    // 右括号的生成条件：要先有左括号
    if (left < right && right) {
      _generate(left, right - 1, str + ')')
    }
  }
  _generate(n, n, '')
  return res
}
// @lc code=end
