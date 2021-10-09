/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  if (n == 1) return 1
  if (n == 2) return 2
  let f1 = 1
  let f2 = 2
  let f3
  for (let i = 2; i < n; i++) {
    f3 = f1 + f2
    f1 = f2
    f2 = f3
  }
  return f3
}
// @lc code=end
