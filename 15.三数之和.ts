/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
// 暴力
function threeSum1(nums: number[]): number[][] {
  let result = []
  if (nums.length < 3) return []
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i - 1] === nums[i]) continue
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k]
        if (sum === 0) {
          result.push([nums[i], nums[j], nums[k]])
          break
        } else if (sum < 0) {
          continue
        } else {
          break
        }
      }
    }
  }

  return result
}
// 双指针
function threeSum(nums: number[]): number[][] {
  let result = []
  if (!nums || nums.length < 3) return []
  nums = nums.sort((a, b) => a - b)
  const len = nums.length
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i - 1] === nums[i]) continue
    let j = i + 1
    let k = len - 1
    while (j < k) {
      if (j > i + 1 && nums[j - 1] === nums[j]) {
        j++
        continue
      }
      let sum = nums[i] + nums[j] + nums[k]
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]])
        j++
        k--
      } else if (sum < 0) {
        j++
      } else {
        k--
      }
    }
  }

  return result
}

// @lc code=end
