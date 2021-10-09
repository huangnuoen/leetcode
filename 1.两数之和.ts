/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]
    if (!(diff in map)) {
      map[nums[i]] = i
    } else {
      return [i, map[diff]]
    }
  }
}
// @lc code=end
