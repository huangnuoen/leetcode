/*
 * @lc app=leetcode.cn id=374 lang=typescript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

function guessNumber(n: number): number {
  let l = 1
  let r = n
  while (l <= r) {
    let m = Math.floor(l + (r - l) / 2)
    let res = guess(m)
    if (res === -1) {
      r = m - 1
    } else if (res === 1) {
      l = m + 1
    } else if (res === 0) {
      return m
    }
  }
  return -1
}
// @lc code=end
