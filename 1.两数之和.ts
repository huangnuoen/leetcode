/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
// 暴力法 O(n^2)
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j]
      if (sum === target) {
        return [i, j]
      }
    }
  }
  return []
}
// hash法 O(n)
function twoSum2(nums: number[], target: number): number[] {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]
    if (!(diff in map)) {
      // 把数组转用map存储，把查找复杂度从O(n)降为O(1)
      map[nums[i]] = i
    } else {
      return [i, map[diff]]
    }
  }
}
// @lc code=end
