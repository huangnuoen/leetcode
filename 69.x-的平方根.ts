/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 */

// @lc code=start
function mySqrt(x: number): number {
  let l = 0
  let r = x
  // 左闭右闭
  while (l <= r) {
    let m = Math.floor(l + (r - l) / 2)
    const sum = m * m
    if (sum > x) {
      r = m - 1
    } else if (sum < x) {
      if ((m + 1) * (m + 1) > x) return m
      l = m + 1
    } else {
      return m
    }
  }
  return -1
}
// @lc code=end
