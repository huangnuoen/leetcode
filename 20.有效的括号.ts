/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * 利用栈先进后出的思路
 * 左括号入栈
 * 括号一一配对，右括号与左括号匹配时，左括号出栈
 * 否则为无效括号
 * 当最后栈为空时表示所有括号正常匹配
 */
function isValid(s: string): boolean {
  if (s.length % 2) return false
  const dict = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  let stack = []
  for (let i = 0; i < s.length; i++) {
    const letter = s.charAt(i)
    if (letter === '(' || letter === '{' || letter === '[') {
      stack.push(letter)
    } else {
      const left = stack.pop()
      if (dict[letter] !== left) {
        return false
      }
    }
  }
  return !stack.length
}
// @lc code=end
